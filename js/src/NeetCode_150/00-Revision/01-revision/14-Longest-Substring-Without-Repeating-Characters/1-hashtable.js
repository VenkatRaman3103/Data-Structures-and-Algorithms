var lengthOfLongestSubstring = function (s) {
    let chars = s.split('');

    let longest = 0;

    for (let i = 0; i < chars.length; i++) {
        let hashTable = {};

        for (let j = i; j < chars.length; j++) {
            let char = chars[j];
            if (hashTable[char] == undefined) {
                hashTable[char] = 1;
            } else {
                break;
            }
        }

        longest = Math.max(longest, Object.keys(hashTable).length);

        hashTable = {};
    }

    return longest;
};

const s = 'abcabcbb';
const result = lengthOfLongestSubstring(s);
console.log(result);
