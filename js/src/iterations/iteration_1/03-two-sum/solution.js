/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        let val = target - key;

        if (map[val] != undefined) {
            return [map[val], i];
        }

        map[key] = i;
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums);
console.log(result);
