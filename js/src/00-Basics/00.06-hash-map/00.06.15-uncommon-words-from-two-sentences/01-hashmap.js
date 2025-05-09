function uncommonFromSentences(s1, s2) {
    const words_1 = s1.split(' ');
    const words_2 = s2.split(' ');

    const hashMap = {};
    const result = [];

    for (let i = 0; i < words_1.length; i++) {
        let key = words_1[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    for (let i = 0; i < words_2.length; i++) {
        let key = words_2[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    for (let key of Object.keys(hashMap)) {
        if (hashMap[key] == 1) {
            result.push(key);
        }
    }

    console.log(words_1, words_2);
    return result;
}

const s1 = 's z z z s';
const s2 = 's z ejt';
const result = uncommonFromSentences(s1, s2);
console.log(result);
