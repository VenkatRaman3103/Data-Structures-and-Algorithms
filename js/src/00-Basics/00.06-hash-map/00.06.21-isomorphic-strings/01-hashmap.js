function isIsomorphic(s, t) {
    let hashTable_1 = {};
    let hashTable_2 = {};

    for (let i = 0; i < s.length; i++) {
        let key_s = s[i];
        let key_t = t[i];

        if (hashTable_1[key_s] == undefined) {
            hashTable_1[key_s] = i;
        }

        if (hashTable_2[key_t] == undefined) {
            hashTable_2[key_t] = i;
        }

        if (hashTable_2[key_t] != hashTable_1[key_s]) {
            return false;
        }
    }
    console.log(hashTable_1, hashTable_2);

    return true;
}
const s = 'bbbaaaba';
const t = 'aaabbbba';
const result = isIsomorphic(s, t);
console.log(result);
