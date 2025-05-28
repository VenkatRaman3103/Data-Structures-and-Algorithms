/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] != val) {
            let temp = nums[r];
            nums[r] = nums[l];
            nums[l] = temp;
            l++;
        }
    }
    console.log(l);
    return nums;
};

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result);
