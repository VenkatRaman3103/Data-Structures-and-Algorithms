export function reverseVowels(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let letters = s.split('');

    let a = 0;
    let b = letters.length - 1;

    while (a < b) {
        while (a < b && !vowels.includes(letters[a])) {
            a += 1;
        }

        while (a < b && !vowels.includes(letters[b])) {
            b -= 1;
        }

        if (a < b) {
            [letters[a], letters[b]] = [letters[b], letters[a]];

            a += 1;
            b -= 1;
        }
    }

    return letters.join('');
}

const s = 'IceCreAm';
const result = reverseVowels(s);
console.log(result);
