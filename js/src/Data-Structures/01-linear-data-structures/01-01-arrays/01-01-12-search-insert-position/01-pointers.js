/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target < nums[0]) {
        return 1;
    }

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (key == target) {
            return i;
        } else if (target < key && target > key) {
            return i;
        }
    }
    return -1;
};

const nums = [1, 3, 5, 6];
const target = 5;
const result = searchInsert(nums, target);
console.log(result);
