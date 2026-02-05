/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        let expect = target - key;

        if (map[expect] != undefined) {
            return [map[expect], i];
        }

        map[key] = i;
    }
};

const nums = [3, 2, 4];
const target = 6;

const result = twoSum(nums, target);
console.log(result);
