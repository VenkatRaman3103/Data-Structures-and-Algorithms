/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = Number.MIN_SAFE_INTEGER;

    let summation = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        summation += num;

        if (max < summation) {
            max = summation;
        }

        if (summation <= 0) {
            summation = 0;
        }
    }

    return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log(result);
