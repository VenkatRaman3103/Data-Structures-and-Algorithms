var productExceptSelf = function (nums) {
    let prefix_arr = [];
    let postfix_arr = [];

    let res = [];

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        prefix *= num;
        prefix_arr.push(prefix);
    }

    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];

        postfix *= num;
        postfix_arr.unshift(postfix);
    }

    for (let i = 0; i < nums.length; i++) {
        let a;
        let b;

        if (prefix_arr[i - 1] == undefined) {
            a = 1;
        } else {
            a = prefix_arr[i - 1];
        }

        if (postfix_arr[i + 1] == undefined) {
            b = 1;
        } else {
            b = postfix_arr[i + 1];
        }

        let val = a * b;

        res.push(val);
    }

    return res;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
