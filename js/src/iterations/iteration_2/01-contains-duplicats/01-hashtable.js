/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashTable = {};

    for (let n of nums) {
        if (hashTable[n] == undefined) {
            hashTable[n] = 1;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3];

const result = containsDuplicate(nums);
console.log(result);
