/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        let val = target - key;

        if (hashTable[val] != undefined) {
            return [hashTable[val], i];
        }

        hashTable[key] = i;
    }

    console.log(hashTable);
};

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
