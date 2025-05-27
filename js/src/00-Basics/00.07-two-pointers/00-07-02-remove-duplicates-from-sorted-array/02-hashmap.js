function removeDuplicates(nums) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        hashTable[key] = 1 + (hashTable[key] || 0);
    }
    return Object.keys(hashTable);
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
