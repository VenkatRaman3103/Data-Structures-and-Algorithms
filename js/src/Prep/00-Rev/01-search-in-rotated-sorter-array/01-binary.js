/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] == target) {
            return nums[m];
        }

        if (nums[m] >= nums[l]) {
            if (target > nums[m] || target < nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        } else {
            if (target < nums[m] || target > nums[r]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
    return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const result = search(nums, target);
console.log(result);
