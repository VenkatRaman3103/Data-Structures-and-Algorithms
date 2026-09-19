/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const freq = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let count of freq) {
        if (count != 0) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
