export function isPalindrome(s) {
    let r = s.length - 1;
    let l = 0;

    let result = true;

    while (l < r) {
        if (!/[a-z0-9]/.test(s[l].toLowerCase())) {
            l++;
            continue;
        }

        if (!/[a-z0-9]/.test(s[r].toLowerCase())) {
            r--;
            continue;
        }

        if (s[l].toLowerCase() != s[r].toLowerCase()) {
            result = false;
        }

        l++;
        r--;
    }

    return result;
}

const s = 'race a car';
const result = isPalindrome(s);
console.log(result);
