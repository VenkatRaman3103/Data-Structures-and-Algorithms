/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let a = 0;

    for (let b = 0; b < nums.length; b++) {
        if (nums[b] != val) {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
            a++;
        }
    }
    return nums;
};

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result);
