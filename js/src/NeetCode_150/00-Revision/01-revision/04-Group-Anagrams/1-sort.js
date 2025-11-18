function groupAnagrams(strs) {
    let hashTable = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];

        let sorted_word = word.split('').sort().join('');

        if (hashTable[sorted_word] != undefined) {
            hashTable[sorted_word].push(word);
        } else {
            hashTable[sorted_word] = [word];
        }
    }

    return Object.values(hashTable);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result = groupAnagrams(strs);
console.log(result);
