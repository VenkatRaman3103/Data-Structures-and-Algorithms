/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] != 0) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
    }
    console.log(nums);
};

const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
