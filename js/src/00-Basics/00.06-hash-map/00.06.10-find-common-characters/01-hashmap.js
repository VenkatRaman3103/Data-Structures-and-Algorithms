function commonChars(words) {
    const hashmap = {};
    const commons = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let letters = word.split('');

        for (let j = 0; j < letters.length; j++) {
            let letter = letters[j];

            if (hashmap[letter] == undefined) {
                hashmap[letter] = 1;
            } else {
                hashmap[letter] += 1;
            }
        }
    }

    for (let key of Object.keys(hashmap)) {
        const n = Math.floor(hashmap[key] / words.length);

        for (let i = 0; i < n; i++) {
            commons.push(key);
        }
    }
    return commons;
}

const words = ['bella', 'label', 'roller'];
const result = commonChars(words);
console.log(result);
