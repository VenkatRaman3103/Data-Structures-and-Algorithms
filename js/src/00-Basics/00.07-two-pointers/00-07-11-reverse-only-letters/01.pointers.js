function swap(str, a, b) {
    let temp = str[a];
    str[a] = str[b];
    str[b] = temp;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    const chars = s.split('');
    let l = 0;
    let r = chars.length - 1;

    const isLetter = (c) => /[a-zA-Z]/.test(c);

    while (l < r) {
        if (!isLetter(chars[l])) {
            l++;
            continue;
        }

        if (!isLetter(chars[r])) {
            r--;
            continue;
        }

        swap(chars, l, r);
        l++;
        r--;
    }

    return chars.join('');
};

const s = 'a-bC-dEf-ghIj';
const result = reverseOnlyLetters(s);
console.log(result);
