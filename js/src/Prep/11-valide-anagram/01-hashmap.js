/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let s_hash = {};
    let t_hash = {};

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        if (s_hash[s_char] == undefined) {
            s_hash[s_char] = 1;
        } else {
            s_hash[s_char] += 1;
        }

        if (t_hash[t_char] == undefined) {
            t_hash[t_char] = 1;
        } else {
            t_hash[t_char] += 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (s_hash[key] != t_hash[key]) {
            return false;
        }
    }
    return true;
};
const s = 'anagram';
const t = 'nagaram';
const result = isAnagram(s, t);
console.log(result);
