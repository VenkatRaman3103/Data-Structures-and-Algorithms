/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (hashMap[n] == undefined) {
            hashMap[n] = 0;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
