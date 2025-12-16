const hashTable = {};

const string = 'hello';

for (let s of string) {
    if (hashTable[s] == undefined) {
        hashTable[s] = 1;
    } else {
        hashTable[s] += 1;
    }
}

console.log(hashTable);
