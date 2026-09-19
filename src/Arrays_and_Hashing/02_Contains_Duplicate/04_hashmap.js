/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (hashmap[n] == undefined) {
            hashmap[n] = 1;
        } else {
            hashmap[n] += 1;
        }
    }

    return Object.keys(hashmap).length != nums.length;
};

const nums = [1, 2, 3, 0];

const result = containsDuplicate(nums);
console.log(result);
