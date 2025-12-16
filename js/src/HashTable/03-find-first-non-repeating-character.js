const word = 'swwiss';

function findFirstUniquChar() {
    const hashTable = {};

    for (let char of word) {
        if (hashTable[char] == undefined) {
            hashTable[char] = 1;
        } else {
            hashTable[char]++;
        }
    }

    for (let char of word) {
        if (hashTable[char] == 1) {
            return char;
        }
    }

    return -1;
}

const result = findFirstUniquChar(word);
console.log(result);
