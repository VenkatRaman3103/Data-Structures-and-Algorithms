function canConstruct(note, magazine) {
    let hashTable = {};

    for (let char of note) {
        hashTable[char] = (hashTable[char] || 0) + 1;
    }

    for (let char of magazine) {
        if (hashTable[char] != undefined) {
            hashTable[char] -= 1;
        }
    }

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] != 0) {
            return false;
        }
    }

    return true;
}

const note = 'aaab';
const magazine = 'aacbdr';

const result = canConstruct(note, magazine);
console.log(result);
