export var twoSum = function (nums, target) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        let expect = target - key;

        if (hashTable[expect] !== undefined) {
            return [hashTable[expect], i];
        }

        hashTable[key] = i;
    }
};
