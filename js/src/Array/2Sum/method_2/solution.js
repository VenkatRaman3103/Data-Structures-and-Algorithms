export const twoSum = (nums, target) => {
    const table = {};

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];

        const remaining = target - key;

        if (table[remaining] != undefined) {
            return [table[remaining], i];
        }

        table[key] = i;
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
