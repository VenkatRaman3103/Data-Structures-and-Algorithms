function groupByWords(words) {
    const hashTable = {};

    for (let w of words) {
        let key = w[0];

        if (hashTable[key] == undefined) {
            hashTable[key] = [w];
        } else {
            hashTable[key].push(w);
        }
    }

    //
    return hashTable;
}

const words = ['apple', 'ant', 'bat', 'ball'];
const result = groupByWords(words);
console.log(result);
