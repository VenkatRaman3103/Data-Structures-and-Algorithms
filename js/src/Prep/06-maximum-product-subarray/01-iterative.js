/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = nums[0];

    let current_max = nums[0];
    let current_min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        let tmp = current_max;

        current_max = Math.max(num * current_max, num * current_min, num);
        current_min = Math.min(num * tmp, num * current_min, num);

        res = Math.max(res, current_max);
    }

    return res;
};

const nums = [2, 3, -2, 4];
const result = maxProduct(nums);
console.log(result);
