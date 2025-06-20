/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        hashTable[key] = 1 + (hashTable[key] || 0);
    }

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] > 1) {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result);
