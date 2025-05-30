/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let val = 1;

        for (let j = 0; j < nums.length; j++) {
            let num_2 = nums[j];

            if (i != j) {
                val *= num_2;
            }
        }
        result.push(val);
    }

    return result;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
