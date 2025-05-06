// NOTE: Intersection of Two Arrays
function intersectionOfArrays_iteractive(arr_1, arr_2) {
    let intersections = [];

    for (let i = 0; i < arr_1.length; i++) {
        let a = arr_1[i];

        for (let j = 0; j < arr_2.length; j++) {
            let b = arr_2[j];

            if (a == b) {
                intersections.push(a);
                let index = arr_2.indexOf(b);
                arr_2.splice(index, 1);
            }
        }
    }

    return intersections;
}

const arr_1 = [1, 2, 2, 1];
const arr_2 = [2, 2];

// console.clear();
// intersectionOfArrays_iteractive(arr_1, arr_2);

// NOTE: Intersection of Two Arrays using hashmap
function intersectionOfArrays_hashmap(nums1, nums2) {
    let table_1 = {};
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        let key = nums1[i];

        if (table_1[key] == undefined) {
            table_1[key] = 1;
        } else {
            table_1[key] += 1;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        let key = nums2[i];

        if (table_1[key] > 0) {
            result.push(key);
            table_1[key] -= 1;
        }
    }

    return result;
}

console.clear();
intersectionOfArrays_hashmap(arr_1, arr_2);
