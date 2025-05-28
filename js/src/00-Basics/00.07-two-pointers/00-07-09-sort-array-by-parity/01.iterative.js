/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let result = [];

    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (key % 2 == 0) {
            evenArr.push(key);
        } else {
            oddArr.push(key);
        }
    }

    for (let i = 0; i < evenArr.length; i++) {
        let evenNum = evenArr[i];
        result.push(evenNum);
    }

    for (let i = 0; i < oddArr.length; i++) {
        let oddNum = oddArr[i];
        result.push(oddNum);
    }

    return result;
};

const nums = [3, 1, 2, 4];
const result = sortArrayByParity(nums);
console.log(result);
