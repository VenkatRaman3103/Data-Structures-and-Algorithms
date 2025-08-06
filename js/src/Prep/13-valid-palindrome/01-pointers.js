/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        let l_char = s[l].toLowerCase();
        let r_char = s[r].toLowerCase();

        if (!/[a-z0-9]/.test(l_char)) {
            l++;
            continue;
        }

        if (!/[a-z0-9]/.test(r_char)) {
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
