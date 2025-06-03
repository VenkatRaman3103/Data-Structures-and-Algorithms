/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        hashTable[key] = 1 + (hashTable[key] || 0);
    }

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] == 1) {
            return Number(key);
        }
    }
};

const nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
console.log(result);
