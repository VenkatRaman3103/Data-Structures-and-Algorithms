function subarraySum(nums, k) {
    let hashTable = {};
    let count = 0;
    let key = 1;

    for (let i = 0; i < nums.length; i++) {
        hashTable[key] = 0;
        for (let j = i; j < nums.length; j++) {
            hashTable[key] += nums[j];

            if (hashTable[key] == k) {
                count += 1;
            }
        }
        key += 1;
    }

    console.log(hashTable);
    return count;
}

const nums = [1, 1, 1];
const k = 2;
const result = subarraySum(nums, k);
console.log(result);
