/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let unique = {};

    for (let n of nums) {
        if (unique[n] == undefined) {
            unique[n] = 1;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result);
