var lengthOfLongestSubstring = function (s) {
    let str = s.split('');

    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        let hasTable = {};
        for (let j = i; j < str.length; j++) {
            let char = str[j];

            if (hasTable[char] == undefined) {
                hasTable[char] = 1;
            } else {
                break;
            }
        }

        if (longest < Object.keys(hasTable).length) {
            longest = Object.keys(hasTable).length;
        }

        hasTable = {};
    }

    return longest;
};

const s = 'abcabcbb';
const result = lengthOfLongestSubstring(s);
console.log(result);
