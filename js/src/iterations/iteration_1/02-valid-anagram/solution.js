/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let s_map = {};
    let t_map = {};

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        s_map[s_char] = (s_map[s_char] || 0) + 1;
        t_map[t_char] = (t_map[t_char] || 0) + 1;
    }

    for (let char of Object.keys(s_map)) {
        if (s_map[char] != t_map[char]) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
