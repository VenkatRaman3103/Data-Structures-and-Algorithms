var minWindow = function (s, t) {
    let tCount = {};
    let window = {};

    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    let have = 0;
    let need = Object.keys(tCount).length;

    let resLength = Infinity;
    let res = [];

    let l = 0;

    for (let r = 0; r < s.length; r++) {
        let char = s[r];

        window[char] = (window[char] || 0) + 1;

        if (tCount[char] && window[char] == tCount[char]) {
            have += 1;
        }

        while (have == need) {
            if (r - l + 1 < resLength) {
                res = [l, r];
                resLength = r - l + 1;
            }

            window[s[l]]--;

            if (tCount[s[l]] && window[s[l]] < tCount[s[l]]) {
                have--;
            }

            l++;
        }
    }

    return s.slice(res[0], res[1] + 1);
};

const s = 'ADOBECODEBANC';
const t = 'ABC';
const result = minWindow(s, t);
console.log(result);
