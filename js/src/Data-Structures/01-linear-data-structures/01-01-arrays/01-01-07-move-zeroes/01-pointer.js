/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let a = 0;
    let b = 0;

    while (b < nums.length) {
        if (nums[b] != 0) {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;

            a++;
        }

        b++;
    }

    console.log(nums);
};

const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);

console.log(result);
