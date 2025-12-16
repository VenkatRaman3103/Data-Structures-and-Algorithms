function union(nums_1, nums_2) {
    let hashTable = {};

    for (let n of nums_1) {
        hashTable[n] = (hashTable[n] || 0) + 1;
    }

    for (let n of nums_2) {
        hashTable[n] = (hashTable[n] || 0) + 1;
    }

    return Object.keys(hashTable).map((n) => Number(n));
}

const nums_1 = [1, 2, 3];
const nums_2 = [3, 4, 5];

const result = union(nums_1, nums_2);
console.log(result);
