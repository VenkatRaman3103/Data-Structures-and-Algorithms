function findAnagrams(s, p) {
    let hashTable = {};
    let result = [];

    // populating the hashTable
    for (let i = 0; i < p.length; i++) {
        let key = p[i];
        if (hashTable[key] == undefined) {
            hashTable[key] = 1;
        } else {
            hashTable[key] += 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let p = i;

        let tempHash = { ...hashTable };

        console.log(tempHash);
        while (tempHash[s[p]] != undefined && tempHash[s[p]] != 0) {
            tempHash[s[p]] -= 1;
            p += 1;
        }

        let found = true;

        console.log(tempHash);

        for (let key of Object.keys(tempHash)) {
            if (tempHash[key] != 0) {
                found = false;
            }
        }

        if (found) {
            result.push(i);
        }
    }

    return result;
}

const s = 'cbaebabacd';
const p = 'abc';
const result = findAnagrams(s, p);
console.log(result);
