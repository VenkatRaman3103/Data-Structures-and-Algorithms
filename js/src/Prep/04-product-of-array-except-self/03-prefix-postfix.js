/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = [];
    let postfix = [];

    let prefix_product = 1;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        prefix_product *= key;

        prefix.push(prefix_product);
    }

    let postfix_product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let key = nums[i];

        postfix_product *= key;

        postfix.unshift(postfix_product);
    }

    for (let i = 0; i < nums.length; i++) {
        let a;

        if (prefix[i - 1] == undefined) {
            a = 1;
        } else {
            a = prefix[i - 1];
        }

        let b;

        if (postfix[i + 1] == undefined) {
            b = 1;
        } else {
            b = postfix[i + 1];
        }

        let key = a * b;

        if (key == '-0') {
            key = 0;
        }

        nums[i] = key;
    }

    return nums;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
