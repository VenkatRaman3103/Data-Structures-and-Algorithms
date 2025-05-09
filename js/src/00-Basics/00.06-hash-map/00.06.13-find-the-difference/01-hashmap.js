function findTheDifference(s, t) {
    const chars1 = s.split('');
    const chars2 = t.split('');
    const hashMap = {};
    let result = '';

    for (let i = 0; i < chars1.length; i++) {
        let key = chars1[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    for (let i = 0; i < chars2.length; i++) {
        let key = chars2[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] -= 1;
        }
    }

    for (let key of Object.keys(hashMap)) {
        if (hashMap[key] > 0 || hashMap[key] < 0) {
            result = key;
        }
    }

    console.log(hashMap);

    return result;
}

// const s = 'abcd';
// const t = 'abcde';
const s = 'a';
const t = 'aa';
const result = findTheDifference(s, t);
console.log(result);
