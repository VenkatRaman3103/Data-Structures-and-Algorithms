export const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let num_1 = nums[i];

        for (let j = 0; j < nums.length; j++) {
            let num_2 = nums[j];

            if (i != j) {
                if (num_1 + num_2 == target) {
                    return [i, j];
                }
            }
        }
    }
};

const target = 6;
const nums = [3, 2, 4];

const result = twoSum(nums, target);
console.log(result);
