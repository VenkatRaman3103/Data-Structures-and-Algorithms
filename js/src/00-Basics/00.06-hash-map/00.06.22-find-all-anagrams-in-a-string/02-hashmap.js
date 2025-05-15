function findAnagrams(s, p) {
    let hashTable = {};
    let result = [];

    for (let i = 0; i < p.length; i++) {
        let key = p[i];
        hashTable[key] = (hashTable[key] || 0) + 1;
    }

    let windowSize = p.length;
    let end = s.length;

    let p1 = 0;
    let p2 = p1 + windowSize;

    while (p2 <= end) {
        let compareTable = {};
        let found = true;

        for (let i = p1; i < p2; i++) {
            let char = s[i];
            compareTable[char] = (compareTable[char] || 0) + 1;
        }

        for (let key in hashTable) {
            if (compareTable[key] !== hashTable[key]) {
                found = false;
                break;
            }
        }

        if (found) {
            result.push(p1);
        }

        p1++;
        p2++;
    }

    return result;
}

const s = 'abab';
const p = 'ab';
const result = findAnagrams(s, p);
console.log(result); // [0, 1, 2]
