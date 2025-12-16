const hashTable = {};

const nums = [1, 2, 2, 3, 3, 3];

for (let n of nums) {
    if (hashTable[n] == undefined) {
        hashTable[n] = 1;
    } else {
        hashTable[n] += 1;
    }
}

console.log(hashTable);
