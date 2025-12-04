export var groupAnagrams = function (strs) {
    let hashTable = {};

    for (let word of strs) {
        let chars = word.split('');

        let keyGen = new Array(26).fill(0);

        for (let char of chars) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);

            keyGen[index]++;
        }

        let key = keyGen.join('#');

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
