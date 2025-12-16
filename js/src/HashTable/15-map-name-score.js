function mapNameScore(names, scores) {
    if (names.length != scores.length) {
        return false;
    }

    let hashTable = {};

    for (let i = 0; i < names.length; i++) {
        let key = names[i];
        let val = scores[i];

        if (hashTable[key] == undefined) {
            hashTable[key] = [val];
        } else {
            hashTable[key].push(val);
        }
    }

    return hashTable;
}

const names = ['Alice', 'Bob', 'Alice'];
const scores = [80, 90, 85];
const result = mapNameScore(names, scores);
console.log(result);
