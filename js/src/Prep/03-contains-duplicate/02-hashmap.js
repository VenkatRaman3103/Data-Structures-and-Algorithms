/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashTable[key] == undefined) {
            hashTable[key] = 1;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result);
