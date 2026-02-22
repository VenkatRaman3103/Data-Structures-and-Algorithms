/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let word of strs) {
        let key = word.split('').sort().join(''); // sorted word

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
