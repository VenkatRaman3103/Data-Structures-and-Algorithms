var containsDuplicate = function (nums) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];

        if (hashTable[key] == undefined) {
            hashTable[key] = 0;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
