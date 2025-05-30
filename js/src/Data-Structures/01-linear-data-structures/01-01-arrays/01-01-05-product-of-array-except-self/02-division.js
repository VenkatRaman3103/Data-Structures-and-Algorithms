/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        product *= key;
    }

    for (let i = 0; i < nums.length; i++) {
        let key = product / nums[i];

        nums[i] = key;
    }

    console.log(product);
    return nums;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
