export var isPalindrome = function (s) {
    let chars = s.split('');

    let l = 0;
    let r = chars.length - 1;

    while (l < r) {
        let charAt_l = chars[l].toLowerCase();
        let charAt_r = chars[r].toLowerCase();

        if (!/[a-z0-9]/.test(charAt_l)) {
            l++;
            continue;
        }

        if (!/[a-z0-9]/.test(charAt_r)) {
            r--;
            continue;
        }

        if (charAt_l == charAt_r) {
            r--;
            l++;
        } else {
            return false;
        }
    }

    return true;
};

const s = 'A man, a plan, a canal: Panama';
const result = isPalindrome(s);
console.log(result);
