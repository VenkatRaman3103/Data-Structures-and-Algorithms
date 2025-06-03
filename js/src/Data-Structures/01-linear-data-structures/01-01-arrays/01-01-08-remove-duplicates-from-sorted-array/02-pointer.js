/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let a = 1;

    for (let b = 1; b < nums.length; b++) {
        if (nums[a - 1] != nums[b]) {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;

            a++;
        }
    }
    console.log(a);
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
