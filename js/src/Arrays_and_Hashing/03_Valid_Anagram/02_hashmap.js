/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let countS = {};
    let countT = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        countT[charT] = (countT[charT] || 0) + 1;
        countS[charS] = (countS[charS] || 0) + 1;
    }

    for (let key of Object.keys(countS)) {
        if (countS[key] != countT[key]) {
            return false;
        }
    }

    return true;
};

const s = 'racecar';
const t = 'carrace';

const result = isAnagram(s, t);
console.log(result);
