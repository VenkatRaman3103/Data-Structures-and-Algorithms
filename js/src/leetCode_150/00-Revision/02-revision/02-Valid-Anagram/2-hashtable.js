export var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let table = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        table[s_char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        table[t_char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for (let count of table) {
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
