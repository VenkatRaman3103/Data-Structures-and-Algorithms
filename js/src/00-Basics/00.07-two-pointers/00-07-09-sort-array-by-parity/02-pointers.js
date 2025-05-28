function swap(nums, a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2 == 0) {
            swap(nums, l, r);
            l++;
        }
    }
    return nums;
};

const nums = [3, 1, 2, 4];
const result = sortArrayByParity(nums);
console.log(result);
