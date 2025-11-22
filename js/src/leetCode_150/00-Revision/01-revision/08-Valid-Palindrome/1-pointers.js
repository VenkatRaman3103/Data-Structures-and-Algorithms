var isPalindrome = function (s) {
    let s_chars = s.split('');

    let l = 0;
    let r = s_chars.length - 1;

    while (l < r) {
        let a = s_chars[l].toLowerCase();
        let b = s_chars[r].toLowerCase();

        if (!/[a-z0-9]/.test(a)) {
            l++;
            continue;
        }

        if (!/[a-z0-9]/.test(b)) {
            r--;
            continue;
        }

        if (a != b) {
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
