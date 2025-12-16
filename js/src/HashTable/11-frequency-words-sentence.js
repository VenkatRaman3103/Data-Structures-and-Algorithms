function frequencyWords(sentence) {
    let words = sentence.split(' ');

    let hashTable = {};

    for (let w of words) {
        hashTable[w] = (hashTable[w] || 0) + 1;
    }

    return hashTable;
}

const sentence = 'hello world hello';

const result = frequencyWords(sentence);
