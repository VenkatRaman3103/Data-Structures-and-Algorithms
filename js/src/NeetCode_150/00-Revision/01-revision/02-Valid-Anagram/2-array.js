var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const s_chars = s.split('');
    const t_chars = t.split('');

    const arr = Array.from({ length: 26 }).fill(0);

    for (let i = 0; i < s_chars.length; i++) {
        let s_char = s_chars[i];
        let t_char = t_chars[i];

        const s_charInd = s_char.charCodeAt(0) - 'a'.charCodeAt(0);
        const t_charInd = t_char.charCodeAt(0) - 'a'.charCodeAt(0);

        arr[s_charInd] += 1;
        arr[t_charInd] -= 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';
const result = isAnagram(s, t);
console.log(result);
