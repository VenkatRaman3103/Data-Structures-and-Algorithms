var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];

        for (let j = 0; j != i && j < nums.length; j++) {
            let b = nums[j];

            let val = a + b;

            if (val == target) {
                return [j, i];
            }
        }
    }
};

const nums = [3, 2, 4];
const target = 6;

const result = twoSum(nums, target);
console.log(result);
