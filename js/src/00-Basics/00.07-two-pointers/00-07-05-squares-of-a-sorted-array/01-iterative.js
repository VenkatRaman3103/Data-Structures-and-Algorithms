/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        result.push(key ** 2);
    }

    return result.sort((a, b) => a - b);
};

const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result);
