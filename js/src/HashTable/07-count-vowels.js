function countVowels(string) {
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let char of string) {
        if (vowels[char] != undefined) {
            vowels[char] += 1;
        } else {
            continue;
        }
    }

    return vowels;
}

const string = 'tooth';
const result = countVowels(string);
console.log(result);
