function frequency(word) {
    const letters = word.split('');
    let hashMap = {};

    for (let i = 0; i < letters.length; i++) {
        let key = letters[i];
        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }
    return hashMap;
}

function commonChars(words) {
    const baseHash = frequency(words[0]);

    for (let i = 0; i < words.length; i++) {
        const currentHash = frequency(words[i]);

        for (let key in baseHash) {
            if (baseHash[key]) {
                baseHash[key] = Math.min(baseHash[key], currentHash[key]);
            } else {
                delete baseHash[key];
            }
        }
    }

    const result = [];

    for (let i in baseHash) {
        for (let j = 0; j < baseHash[i]; j++) {
            result.push(i);
        }
    }

    return result;
}

const words = ['cool', 'lock', 'cook'];
const result = commonChars(words);
console.log(result);
