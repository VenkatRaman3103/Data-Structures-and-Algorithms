/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let num = 0;

    for (let i = 0; i < digits.length; i++) {
        let key = digits[i];
        num = num * 10 + key;
    }

    num++;

    let result = [];

    while (num > 0) {
        let lastDigit = num % 10;
        result.unshift(lastDigit);
        num = Math.floor(num / 10);
    }

    return result;
};

const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result);
