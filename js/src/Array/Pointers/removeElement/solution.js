export const removeElement = (nums, val) => {
    let a = 0;
    let b = 0;

    let end = nums.length;

    while (a < end) {
        if (nums[a] != val) {
            [nums[a], nums[b]] = [nums[b], nums[a]];

            b++;
        }
        a++;
    }

    return nums;
};

const nums = [0, 1, 2, 2, 2, 3, 0, 4, 2];
const val = 2;

const result = removeElement(nums, val);
console.log(result);
