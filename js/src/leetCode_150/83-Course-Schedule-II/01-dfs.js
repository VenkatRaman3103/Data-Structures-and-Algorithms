var findOrder = function (numCourses, prerequisites) {
    let preMap = new Map();

    for (let crs = 0; crs <= numCourses; crs++) {
        preMap.set(crs, []);
    }

    for (let [crs, pre] of prerequisites) {
        preMap.get(crs).push(pre);
    }

    let visited = new Set();

    function dfs(crs) {
        if (visited.has(crs)) {
            return false;
        }

        if (preMap.get(crs).length == 0) {
            return true;
        }

        visited.add(crs);

        for (let pre of preMap.get(crs)) {
            if (dfs(pre) == false) {
                return false;
            }
        }

        visited.delete(crs);

        preMap.set(crs, []);

        return true;
    }

    for (let i = 0; i <= numCourses; i++) {
        if (dfs(i) == false) {
            return false;
        }
    }

    return true;
};

const numCourses = 5;
const prerequisites = [
    [4, 2],
    [1, 2],
    [2, 3],
    [2, 5],
    [5, 3],
];

const result = findOrder(numCourses, prerequisites);
console.log(result);
