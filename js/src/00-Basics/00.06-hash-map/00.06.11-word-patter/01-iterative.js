function wordPattern(pattern, s) {
    const hashMap = new Map();
    const inverseHashMap = new Map();

    const pattern_arr = pattern.split('');
    const words = s.split(' ');

    if (pattern_arr.length !== words.length) {
        return false;
    }

    for (let i = 0; i < words.length; i++) {
        const key = words[i];
        if (!inverseHashMap.has(key)) {
            inverseHashMap.set(key, pattern_arr[i]);
        }
    }

    for (let i = 0; i < pattern_arr.length; i++) {
        const key = pattern_arr[i];
        const word = words[i];

        if (!hashMap.has(key) && inverseHashMap.get(word) === key) {
            hashMap.set(key, word);
        }
    }

    for (let j = 0; j < words.length; j++) {
        const key = pattern_arr[j];
        if (hashMap.get(key) !== words[j]) {
            return false;
        }
    }

    return true;
}

const pattern = 'abba';
const s = 'dog constructor constructor dog';

const result = wordPattern(pattern, s);
console.log(result);
