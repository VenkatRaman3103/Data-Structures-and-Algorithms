/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;

        r--;
        l++;
    }

    return s;
};

const s = ['H', 'a', 'n', 'n', 'a', 'h'];
const result = reverseString(s);
console.log(result);
