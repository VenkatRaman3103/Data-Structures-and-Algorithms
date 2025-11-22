var characterReplacement = function (s, k) {
    let res = 0;
    let hashTable = {};
    let chars = s.split('');
    let l = 0;

    function getMostFrequentElement() {
        let freq = 0;

        for (let key of Object.keys(hashTable)) {
            if (freq < hashTable[key]) {
                freq = hashTable[key];
            }
        }

        return freq;
    }

    for (let r = 0; r < chars.length; r++) {
        let char = chars[r];

        hashTable[char] = hashTable[char] + 1 || 1;

        let window_length = r - l + 1;
        let mostFreqElement = getMostFrequentElement();

        while (window_length - mostFreqElement > k) {
            hashTable[chars[l]] -= 1;
            l++;

            window_length = r - l + 1;
            mostFreqElement = getMostFrequentElement();
        }

        if (window_length - mostFreqElement <= k) {
            res = Math.max(res, window_length);
        }
    }
    return res;
};

const s = 'AABABBA';
const k = 1;
const result = characterReplacement(s, k);
console.log(result);
