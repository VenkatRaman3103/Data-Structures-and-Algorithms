export var findLengthOfLCIS = function (nums) {
    let result = [];

    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];

        if (key < nums[i + 1]) {
            result.push(key);
        } else {
            result.push(key);
            max = Math.max(result.length, max);
            result = [];
        }
    }

    return max;
};

// const nums = [1, 3, 5, 4, 2, 3, 4, 5];
//
// const result = findLengthOfLCIS(nums);
// console.log(result);
