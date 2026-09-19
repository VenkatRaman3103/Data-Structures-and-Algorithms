/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let sortS = s.split('').sort().join('');
    let sortT = t.split('').sort().join('');

    return sortT == sortS;
};

const s = 'rat';
const t = 'car';

const result = isAnagram(s, t);
console.log(result);
