/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const res = [];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < nums.length; j++) {
            let num = nums[j];

            res.push(num);
        }
    }

    return res;
};

const nums = [1, 2, 1];

const result = getConcatenation(nums);
console.log(result);
