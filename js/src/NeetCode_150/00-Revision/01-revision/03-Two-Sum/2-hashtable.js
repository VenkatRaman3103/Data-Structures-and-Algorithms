var twoSum = function (nums, target) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        let expect = target - num;

        if (hashTable[expect] != undefined) {
            return [hashTable[expect], i];
        }

        hashTable[num] = i;
    }
};

const nums = [3, 2, 4];
const target = 6;

const result = twoSum(nums, target);
console.log(result);
