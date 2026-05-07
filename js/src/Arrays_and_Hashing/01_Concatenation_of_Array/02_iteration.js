/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let n = nums.length;

    let arr = new Array(n * 2);

    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i];
        arr[i + n] = nums[i];
    }

    return arr;
};

const nums = [1, 2, 1];

const result = getConcatenation(nums);
console.log(result);
