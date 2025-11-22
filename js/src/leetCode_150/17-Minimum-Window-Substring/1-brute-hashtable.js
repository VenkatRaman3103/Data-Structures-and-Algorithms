var minWindow = function (s, t) {
    let res = '';
    let minLength = Infinity;

    let tCount = {};

    for (let char of t) {
        tCount[char] = tCount[char] + 1 || 1;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let sub = s.slice(i, j + 1);

            let containsAll = true;

            let subCount = {};

            for (let char of sub) {
                subCount[char] = subCount[char] + 1 || 1;
            }

            for (let key of Object.keys(tCount)) {
                if (subCount[key] == undefined || subCount[key] < tCount[key]) {
                    containsAll = false;
                    break;
                }
            }

            if (containsAll) {
                if (sub.length < minLength) {
                    minLength = sub.length;
                    res = sub;
                }
            }
        }
    }
    return res;
};

const s = 'ADOBECODEBANC';
const t = 'ABC';
const result = minWindow(s, t);
console.log(result);
