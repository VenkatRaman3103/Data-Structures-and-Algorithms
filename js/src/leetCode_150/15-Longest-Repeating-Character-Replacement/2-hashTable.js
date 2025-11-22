var characterReplacement = function (s, k) {
    let res = 0;
    let hashTable = {};
    let chars = s.split('');
    let l = 0;
    let maxFreq = 0;

    for (let r = 0; r < chars.length; r++) {
        let char = chars[r];

        hashTable[char] = hashTable[char] + 1 || 1;

        let window_length = r - l + 1;

        maxFreq = Math.max(maxFreq, hashTable[char]);

        if (window_length - maxFreq > k) {
            hashTable[chars[l]] -= 1;
            l++;
        }

        if (window_length - maxFreq <= k) {
            res = Math.max(res, window_length);
        }
    }
    return res;
};

const s = 'AABABBA';
const k = 1;
const result = characterReplacement(s, k);
console.log(result);
