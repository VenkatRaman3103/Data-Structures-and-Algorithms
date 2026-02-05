var findOrder = function (numCourses, prerequisites) {
    let preMap = new Map();

    for (let crs = 0; crs <= numCourses; crs++) {
        preMap.set(crs, []);
    }

    for (let [crs, pre] of prerequisites) {
        preMap.get(crs).push(pre);
    }

    let output = [];
    let visited = new Set();
    let cycle = new Set();

    function dfs(crs) {
        if (cycle.has(crs)) {
            return false;
        }

        if (visited.has(crs)) {
            return true;
        }

        cycle.add(crs);

        for (let pre of preMap.get(crs)) {
            if (dfs(pre) == false) {
                return false;
            }
        }
        visited.add(crs);

        cycle.delete(crs);

        output.push(crs);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i) == false) {
            return [];
        }
    }

    return output;
};

const numCourses = 4;
const prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
];

const result = findOrder(numCourses, prerequisites);
console.log(result);
