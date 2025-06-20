/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            let num = nums[j];

            if (i != j) {
                product *= num;
            }
        }

        result.push(product);
    }

    return result;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
