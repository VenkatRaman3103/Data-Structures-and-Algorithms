/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let s1_table = Array.from({ length: 26 }).fill(0);
    let s2_table = Array.from({ length: 26 }).fill(0);

    let base = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        s1_table[s1[i].charCodeAt(0) - base] += 1;
        s2_table[s2[i].charCodeAt(0) - base] += 1;
    }

    let matches = 0;

    for (let i = 0; i < 26; i++) {
        if (s1_table[i] == s2_table[i]) {
            matches += 1;
        }
    }

    let l = 0;

    for (let r = s1.length; r < s2.length; r++) {
        if (matches == 26) {
            return true;
        }

        let index;

        index = s2[l].charCodeAt(0) - base;
        s2_table[index] -= 1;

        if (s1_table[index] == s2_table[index]) {
            matches += 1;
        } else {
            matches -= 1;
        }

        index = s2[r].charCodeAt(0) - base;
        s2_table[index] += 1;

        if (s1_table[index] == s2_table[index]) {
            matches += 1;
        } else {
            matches -= 1;
        }

        l++;
    }

    return false;
};

const s1 = 'ab';
const s2 = 'eidboaoo';

const result = checkInclusion(s1, s2);
console.log(result);
