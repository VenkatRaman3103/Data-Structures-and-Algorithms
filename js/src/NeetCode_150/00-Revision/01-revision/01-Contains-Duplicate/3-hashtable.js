var containsDuplicate = function (nums) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashTable[key] == undefined) {
            hashTable[key] = 1;
        } else {
            hashTable[key] += 1;
        }
    }

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] > 1) {
            return true;
        }
    }

    return false;
};

const nums = [5, 0, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
