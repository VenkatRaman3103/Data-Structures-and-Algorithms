var isPalindrome = function (s) {
    let l = 0;
    let r = s.split('').length - 1;

    while (l < r) {
        let left_char = s[l].toLowerCase();
        let rigth_char = s[r].toLowerCase();

        if (!/[a-z0-9]/.test(left_char)) {
            l++;
            continue;
        }

        if (!/[a-z0-9]/.test(rigth_char)) {
            r--;
            continue;
        }

        if (left_char != rigth_char) {
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
