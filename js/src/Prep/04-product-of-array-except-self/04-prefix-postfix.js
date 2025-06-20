/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = Array.from({ length: nums.length }).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        result[i] = prefix;
        prefix *= key;
    }

    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let key = nums[i];

        result[i] *= postfix;
        postfix *= key;
    }

    return result;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
