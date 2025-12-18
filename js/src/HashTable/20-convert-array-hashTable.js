function convert(arr) {
    let hashTable = {};

    for (let entery of arr) {
        let key = entery.id;
        let val = entery;

        hashTable[key] = val;
    }

    return hashTable;
}

const arr = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
];

const result = convert(arr);
console.log(result);
