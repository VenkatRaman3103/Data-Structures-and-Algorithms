function findMaximum(nums) {
    let hashTable = {};

    for (let n of nums) {
        hashTable[n] = (hashTable[n] || 0) + 1;
    }

    let max = 0;
    let currMaxKey = 0;

    for (let key of Object.keys(hashTable)) {
        if (max < hashTable[key]) {
            max = hashTable[key];
            currMaxKey = key;
        }
    }

    return currMaxKey;
}

const nums = [1, 2, 2, 2, 2, 3, 3, 3];

const result = findMaximum(nums);
console.log(result);
