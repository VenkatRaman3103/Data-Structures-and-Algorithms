function reverseString(str, n, reversed) {
    if (n < 0) {
        return reversed;
    }

    reversed = reversed + str[n];

    return reverseString(str, n - 1, reversed);
}

const str = 'recursion';

console.clear();
console.log(str);
console.log(reverseString(str, str.length - 1, ''));
