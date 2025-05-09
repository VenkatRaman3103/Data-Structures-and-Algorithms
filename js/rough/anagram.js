function anagram(str1, str2) {
    const letters_1 = str1.split('');
    const letters_2 = str2.split('');

    if (letters_1.length != letters_2.length) {
        return false;
    }

    const hashMap = {};

    for (let i = 0; i < letters_1.length; i++) {
        let key = letters_1[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    for (let j = 0; j < letters_2.length; j++) {
        let key = letters_2[j];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] -= 1;
        }
    }

    for (let key of Object.keys(hashMap)) {
        if (hashMap[key] != 0) {
            return false;
        }
    }

    return true;
}

const result = anagram('aate', 'eats');
console.log(result);
