/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let word of strs) {
        let keyGenArray = new Array(26).fill(0);

        for (let char of word) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            keyGenArray[index] += 1;
        }

        let key = keyGenArray.join('#');

        if (map[key] == undefined) {
            map[key] = [word];
        } else {
            map[key].push(word);
        }
    }

    return Object.values(map);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const result = groupAnagrams(strs);
console.log(result);
