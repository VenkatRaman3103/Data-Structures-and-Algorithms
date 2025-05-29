/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let expect = target - num;

        if (hashTable[expect] != undefined) {
            return [hashTable[expect], i];
        }

        hashTable[num] = i;
    }

    console.log(hashTable);
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
