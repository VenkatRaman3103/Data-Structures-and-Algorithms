var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const s_chars = s.split('');
    const t_chars = t.split('');

    let s_table = {};
    let t_table = {};

    for (let i = 0; i < s_chars.length; i++) {
        let s_char = s_chars[i];
        let t_char = t_chars[i];

        s_table[s_char] = s_table[s_char] + 1 || 1;
        t_table[t_char] = t_table[t_char] + 1 || 1;
    }

    for (let i = 0; i < s_chars.length; i++) {
        let char = s_chars[i];

        if (s_table[char] != t_table[char]) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';
const result = isAnagram(s, t);
console.log(result);
