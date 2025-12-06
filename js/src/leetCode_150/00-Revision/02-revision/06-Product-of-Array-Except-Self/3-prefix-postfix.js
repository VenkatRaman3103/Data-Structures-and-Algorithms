export var productExceptSelf = function (nums) {
    let arr = new Array(nums.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        arr[i] = prefix;
        prefix *= key;
    }

    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let key = nums[i];

        arr[i] *= postfix;

        if (arr[i] == '-0') {
            arr[i] = 0;
        }

        postfix *= key;
    }

    return arr;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
