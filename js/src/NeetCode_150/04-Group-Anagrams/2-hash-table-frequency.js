function groupAnagrams(strs) {
    let hashMap = {};

    for (let str of strs) {
        let freq = Array.from({ length: 26 }).fill(0);

        for (let char of str) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        let key = freq.join('#');

        if (hashMap[key] == undefined) {
            hashMap[key] = [];
        }
        hashMap[key].push(str);
    }

    return Object.values(hashMap);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const result = groupAnagrams(strs);
console.log(result);

// [1, 0, 0, 0, 1] → "10001"
// [10, 0, 0, 0, 1] → "10001" ❌ (same string!)
