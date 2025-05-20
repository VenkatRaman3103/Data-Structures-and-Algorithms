function reverseNumber(num) {
    let reversed = 0;

    while (num > 0) {
        let lastNumber = num % 10;
        reversed = reversed * 10 + lastNumber;
        num = Math.floor(num / 10);
    }

    return reversed;
}
const num = 12345;
const result = reverseNumber(num);
console.log(result);
