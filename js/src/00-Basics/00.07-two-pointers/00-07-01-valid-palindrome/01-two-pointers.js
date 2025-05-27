function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        const leftChar = s[l].toLowerCase();
        const rightChar = s[r].toLowerCase();

        if (!/[a-z0-9]/.test(leftChar)) {
            l++;
            continue;
        }
        if (!/[a-z0-9]/.test(rightChar)) {
            r--;
            continue;
        }

        if (leftChar !== rightChar) {
            return false;
        }

        l++;
        r--;
    }

    return true;
}

const s = 'A man, a plan, a canal: Panama';
const result = isPalindrome(s);
console.log(result);
