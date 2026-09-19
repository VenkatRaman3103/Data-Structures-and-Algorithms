/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums = nums.sort();

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }

    return false;
};

const nums = [0, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
