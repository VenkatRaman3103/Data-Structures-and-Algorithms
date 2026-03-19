/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let res = 0;

    let frequency = {};

    let max = 0;

    let l = 0;

    for (let r = 0; r < s.length; r++) {
        let char = s[r];

        if (frequency[char] == undefined) {
            frequency[char] = 1;
        } else {
            frequency[char] += 1;
        }

        let window_length = r - l + 1;

        max = Math.max(frequency[char], max);

        if (window_length - max > k) {
            frequency[s[l]] -= 1;

            l++;
        }

        if (window_length - max <= k) {
            res = Math.max(window_length, res);
        }
    }

    return res;
};

const s = 'ABAB';
const k = 2;

const result = characterReplacement(s, k);
console.log(result);
