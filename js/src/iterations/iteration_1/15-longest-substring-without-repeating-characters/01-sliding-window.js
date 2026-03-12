/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let chars = s.split('');

    let longest = 0;

    for (let i = 0; i < chars.length; i++) {
        let hashTable = {};

        for (let j = i; j < chars.length; j++) {
            let key = chars[j];

            if (hashTable[key] == undefined) {
                hashTable[key] = 1;
            } else {
                break;
            }
        }

        if (longest < Object.keys(hashTable).length) {
            longest = Object.keys(hashTable).length;
        }

        hashTable = {};
    }

    return longest;
};

const s = 'abcabcbb';

const result = lengthOfLongestSubstring(s);
console.log(result);
