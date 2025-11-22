function groupAnagrams(strs) {
    let hasTable = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];

        let arr = Array.from({ length: 26 }).fill(0);

        for (let char of word) {
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        let key = arr.join('#');

        if (hasTable[key] != undefined) {
            hasTable[key].push(word);
        } else {
            hasTable[key] = [word];
        }
    }

    return Object.values(hasTable);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result = groupAnagrams(strs);
console.log(result);
