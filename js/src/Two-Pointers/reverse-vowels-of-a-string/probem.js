export function reverseVowels(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const temp_arr = [];

    for (let char of s) {
        if (vowels.includes(char)) {
            temp_arr.push(char);
        }
    }

    temp_arr.reverse();

    let a = 0;

    let letters = s.split('');

    for (let i = 0; i < letters.length; i++) {
        let char = letters[i];

        if (vowels.includes(char)) {
            letters[i] = temp_arr[a];
            a += 1;
        }
    }

    return letters.join('');
}

const s = 'IceCreAm';
const result = reverseVowels(s);
console.log(result);
