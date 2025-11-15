var productExceptSelf = function (nums) {
    const prefix_arr = [];
    const postfix_arr = [];

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        prefix *= key;
        prefix_arr.push(prefix);
    }

    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let key = nums[i];

        postfix *= key;
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
