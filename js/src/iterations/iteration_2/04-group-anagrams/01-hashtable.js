/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hashTable = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];

        let keyGenArr = Array.from({ length: 26 }).fill(0);

        for (let char of word) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);

            keyGenArr[index] += 1;
        }

        let key = keyGenArr.join('-');

        if (hashTable[key] == undefined) {
            hashTable[key] = [word];
        } else {
            hashTable[key].push(word);
        }
    }

    return Object.values(hashTable);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const result = groupAnagrams(strs);
console.log(result);
