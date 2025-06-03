/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let hashTable = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        hashTable[key] = 1 + (hashTable[key] || 0);
    }

    for (let key of Object.keys(hashTable)) {
        result.push(Number(key));
    }

    console.log(result);
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
