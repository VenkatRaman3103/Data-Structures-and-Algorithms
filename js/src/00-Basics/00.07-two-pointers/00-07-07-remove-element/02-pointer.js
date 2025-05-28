/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] != val) {
            nums[r] = nums[l];
            l++;
        }
    }
    console.log(l);
    return l;
};

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result);
