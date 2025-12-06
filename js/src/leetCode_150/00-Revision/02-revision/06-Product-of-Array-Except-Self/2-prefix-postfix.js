export var productExceptSelf = function (nums) {
    let res = new Array(nums.length).fill(0);
    let postfix_arr = [];
    let prefix_arr = [];

    let postfix = 1;

    for (let n of nums) {
        postfix *= n;
        postfix_arr.push(postfix);
    }

    let prefix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let n = nums[i];
        prefix *= n;
        prefix_arr.unshift(prefix);
    }

    for (let i = 0; i < nums.length; i++) {
        let a;
        let b;

        if (postfix_arr[i - 1] == undefined) {
            a = 1;
        } else {
            a = postfix_arr[i - 1];
        }

        if (prefix_arr[i + 1] == undefined) {
            b = 1;
        } else {
            b = prefix_arr[i + 1];
        }

        let val = a * b;

        if (val == '-0') {
            val = 0;
        }

        res[i] = val;
    }

    return res;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
