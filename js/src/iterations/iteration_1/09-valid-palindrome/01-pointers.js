/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let chars = s.split('');

    let l = 0;
    let r = chars.length - 1;

    while (l < r) {
        let l_char = chars[l].toLowerCase();
        let r_char = chars[r].toLowerCase();

        if (!/[0-9a-z]/.test(l_char)) {
            l++;
            continue;
        }

        if (!/[0-9a-z]/.test(r_char)) {
            r--;
            continue;
        }

        if (l_char != r_char) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};

const s = 'A man, a plan, a canal: Panama';

const result = isPalindrome(s);
console.log(result);
