function twoSum(nums, target) {
    let hasTable = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hasTable[key] == undefined) {
            hasTable[key] = target - key;
        }
    }

    for (let i = 0; i < Object.keys(hasTable).length; i++) {
        let key = Object.keys(hasTable)[i];

        let check = target - key;

        if (hasTable[check]) {
            result.push(i);
        }
    }

    console.log(result);
    return hasTable;
}

let nums = [10, 2, 2, 35, 26, 30, 31, 5, 47, 60];
let target = 4;

console.clear();
console.log(twoSum(nums, target));
