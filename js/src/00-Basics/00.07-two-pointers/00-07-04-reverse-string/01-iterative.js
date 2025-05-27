/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let result = [];

    for (let i = s.length - 1; i >= 0; i--) {
        let key = s[i];
        result.push(key);
    }

    return result;
};

const s = ['h', 'e', 'l', 'l', 'o'];
const result = reverseString(s);
console.log(result);
