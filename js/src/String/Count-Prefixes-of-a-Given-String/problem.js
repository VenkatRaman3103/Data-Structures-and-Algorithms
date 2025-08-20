export function countPrefixes(words, s) {
    let counter = 0;

    for (let word of words) {
        if (s.startsWith(word)) {
            counter += 1;
        }
    }

    return counter;
}
const words = ['a', 'b', 'c', 'ab', 'bc', 'abc'];
const s = 'abc';

const result = countPrefixes(words, s);
console.log(result);
