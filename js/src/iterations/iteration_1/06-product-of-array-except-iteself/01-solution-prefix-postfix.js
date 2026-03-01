/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = 1;
    let prefixArr = [];

    for (let n of nums) {
        prefix *= n;

        prefixArr.push(prefix);
    }

    let postfix = 1;
    let postfixArr = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        let n = nums[i];

        postfix *= n;
        postfixArr.unshift(postfix);
    }

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let a = 1;
        let b = 1;

        if (prefixArr[i - 1] == undefined) {
            a = 1;
        } else {
            a = prefixArr[i - 1];
        }

        if (postfixArr[i + 1] == undefined) {
            b = 1;
        } else {
            b = postfixArr[i + 1];
        }

        let key = a * b;

        if (key == '-0') {
            key = 0;
        }

        result[i] = key;
    }

    return result;
};

const nums = [1, 2, 3, 4];

const result = productExceptSelf(nums);
console.log(result);
