var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }

    let s1Count = Array(26).fill(0);
    let s2Count = Array(26).fill(0);

    let base = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1[i].charCodeAt() - base] += 1;
        s2Count[s2[i].charCodeAt() - base] += 1;
    }

    let matches = 0;

    for (let i = 0; i < 26; i++) {
        if (s2Count[i] == s1Count[i]) {
            matches++;
        }
    }

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        if (matches == 26) return true;

        let index;

        index = s2[r].charCodeAt(0) - base;
        s2Count[index] += 1;
        if (s1Count[index] == s2Count[index]) {
            matches += 1;
        } else if (s1Count[index] + 1 == s2Count[index]) {
            matches -= 1;
        }

        index = s2[l].charCodeAt(0) - base;
        s2Count[index] -= 1;
        if (s1Count[index] == s2Count[index]) {
            matches += 1;
        } else if (s1Count[index] - 1 == s2Count[index]) {
            matches -= 1;
        }

        l++;
    }

    return matches == 26;
};

const s1 = 'ab';
const s2 = 'eidboaoo';

const result = checkInclusion(s1, s2);
console.log(result);
