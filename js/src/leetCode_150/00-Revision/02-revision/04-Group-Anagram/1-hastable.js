export var groupAnagrams = function (strs) {
    let hashTable = {};

    for (let word of strs) {
        let key = word.split('').sort().join('');

        if (hashTable[key] == undefined) {
            hashTable[key] = [];
        }
        hashTable[key].push(word);
    }
    return Object.values(hashTable);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result = groupAnagrams(strs);
console.log(result);
