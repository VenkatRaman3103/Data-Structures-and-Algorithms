function groupAnagrams(strs) {
    let hashMap = {};
    for (let word of strs) {
        let key = word.split('').sort().join('');

        if (hashMap[key] == undefined) {
            hashMap[key] = [word];
        } else {
            hashMap[key].push(word);
        }
    }
    return Object.values(hashMap);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result = groupAnagrams(strs);
console.log(result);
