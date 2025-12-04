export var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let s_table = {};
    let t_table = {};

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        s_table[s_char] = (s_table[s_char] || 0) + 1;
        t_table[t_char] = (t_table[t_char] || 0) + 1;
    }

    for (let key of Object.keys(s_table)) {
        if (s_table[key] != t_table[key]) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';
const result = isAnagram(s, t);
console.log(result);
