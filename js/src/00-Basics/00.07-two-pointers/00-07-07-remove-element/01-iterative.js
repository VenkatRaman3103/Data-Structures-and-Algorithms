/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (key != val) {
            result.push(key);
        }
    }
    return result.length;
};

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result);
