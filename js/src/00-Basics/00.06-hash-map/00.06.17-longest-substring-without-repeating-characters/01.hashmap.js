function lengthOfLongestSubstring(s) {
    const chars = s.split('');
    let longest = 0;

    for (let i = 0; i < chars.length; i++) {
        let hashMap = {};
        for (let j = i; j < chars.length; j++) {
            let key = chars[j];
            if (hashMap[key] == undefined) {
                hashMap[key] = 1;
            } else {
                break;
            }
        }

        if (longest < Object.keys(hashMap).length) {
            longest = Object.keys(hashMap).length;
        }
        hashMap = {};
    }
    return longest;
}

const s = 'abcabcbb';
const result = lengthOfLongestSubstring(s);
console.log(result);
