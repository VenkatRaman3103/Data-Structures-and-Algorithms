function conutFrequency(names) {
    let hashTable = {};

    for (let n of names) {
        let key = n[0];

        hashTable[key] = (hashTable[key] || 0) + 1;
    }

    return hashTable;
}

const names = ['Alice', 'Bob', 'Anna', 'Brian'];

const result = conutFrequency(names);
console.log(result);
