function groupWordsByLength(words) {
    let hashTable = {};

    for (let word of words) {
        let key = word.length;

        if (hashTable[key] == undefined) {
            hashTable[key] = [word];
        } else {
            hashTable[key].push(word);
        }
    }

    return hashTable;
}

const words = ['cat', 'dog', 'fish', 'hi'];

const result = groupWordsByLength(words);
console.log(result);
