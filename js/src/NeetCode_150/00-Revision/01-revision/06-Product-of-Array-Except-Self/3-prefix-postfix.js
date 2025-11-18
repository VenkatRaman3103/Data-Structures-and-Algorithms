var productExceptSelf = function (nums) {
    const arr = Array.from({ length: nums.length }).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        arr[i] *= prefix;
        prefix *= num;
    }

    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];

        arr[i] *= postfix;
        postfix *= num;
    }

    return arr;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
