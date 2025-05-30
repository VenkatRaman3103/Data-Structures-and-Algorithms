/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];

    let prefixTable = [];
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        prefix *= key;
        prefixTable.push(prefix);
    }

    let postfixTable = [];
    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let key = nums[i];
        postfix *= key;
        postfixTable.unshift(postfix);
    }

    for (let i = 0; i < nums.length; i++) {
        let a;
        if (prefixTable[i - 1] == undefined) {
            a = 1;
        } else {
            a = prefixTable[i - 1];
        }

        let b;
        if (postfixTable[i + 1] == undefined) {
            b = 1;
        } else {
            b = postfixTable[i + 1];
        }

        let key = a * b;

        if (key == '-0') {
            key = 0;
        }

        result[i] = key;
    }

    return result;
};

const nums = [-1, 1, 0, -3, 3];
const result = productExceptSelf(nums);
console.log(result);
