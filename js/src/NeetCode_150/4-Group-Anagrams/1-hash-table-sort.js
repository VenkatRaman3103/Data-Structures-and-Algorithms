function groupAnagrams(strs) {
    let hashMap = {};

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];

        let sorted_str = str.split('').sort().join('');

        if (hashMap[sorted_str] == undefined) {
            hashMap[sorted_str] = [str];
        } else {
            hashMap[sorted_str].push(str);
        }
    }

    return Object.values(hashMap);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const result = groupAnagrams(strs);
console.log(result);
