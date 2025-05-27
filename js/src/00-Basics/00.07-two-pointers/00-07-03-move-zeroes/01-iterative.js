/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let result = [];
    let zeroCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (key == 0) {
            zeroCounter += 1;
        } else {
            result.push(key);
        }
    }

    for (let i = 0; i < zeroCounter; i++) {
        result.push(0);
    }

    console.log(result);
    return result;
};

const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
