export var twoSum = function (nums, target) {
    let hashtable = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        let expect = target - n;

        if (hashtable[n] != undefined) {
            return [hashtable[n], i];
        }

        hashtable[expect] = i;
    }
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
