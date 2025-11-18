var productExceptSelf = function (nums) {
    let product = 1;

    for (let num of nums) {
        product *= num;
    }

    for (let i = 0; i < nums.length; i++) {
        let remainder = product / nums[i];
        nums[i] = remainder;
    }

    return nums;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
