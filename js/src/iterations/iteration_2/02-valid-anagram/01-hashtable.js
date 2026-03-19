/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let s_table = {};
    let t_table = {};

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        s_table[s_char] = s_table[s_char] + 1 || 1;
        t_table[t_char] = t_table[t_char] + 1 || 1;
    }

    for (let s_char of Object.keys(s_table)) {
        if (t_table[s_char] != s_table[s_char]) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
