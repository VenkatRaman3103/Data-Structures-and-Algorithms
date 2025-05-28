/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let l = 0;

    for (let r = 0; r < t.length; r++) {
        let char_t = t[r];
        let char_s = s[l];

        if (char_s == char_t) {
            l++;
        }
    }

    return l == s.length;
};
const s = 'axc';
const t = 'ahbgdc';
const result = isSubsequence(s, t);
console.log(result);
