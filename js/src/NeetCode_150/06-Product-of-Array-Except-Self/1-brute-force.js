var productExceptSelf = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let acc = 1;

        for (let j = 0; j < nums.length; j++) {
            let key = nums[j];
            if (i != j) {
                acc *= key;
            }
        }
        result.push(acc);
    }

    return result;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
