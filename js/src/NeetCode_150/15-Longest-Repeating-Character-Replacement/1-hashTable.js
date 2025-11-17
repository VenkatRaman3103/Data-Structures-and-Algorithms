var characterReplacement = function (s, k) {
    const chars = s.split('');
    let count = {};
    let res = 0;
    let l = 0;

    function getMostFrequent() {
        let freq = 0;

        for (let key of Object.keys(count)) {
            if (count[key] > freq) {
                freq = count[key];
            }
        }
        return freq;
    }

    for (let r = 0; r < chars.length; r++) {
        let char = chars[r];

        count[char] = count[char] + 1 || 1;

        let windowLength = r - l + 1;
        let mostFrequent = getMostFrequent();

        while (windowLength - mostFrequent > k) {
            count[chars[l]] -= 1;
            l++;

            mostFrequent = getMostFrequent();
            windowLength = r - l + 1;
        }

        if (windowLength - mostFrequent <= k) {
            res = Math.max(res, windowLength);
        }
    }

    return res;
};

const s = 'AABABBA';
const k = 1;
const result = characterReplacement(s, k);
console.log(result);
