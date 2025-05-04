function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        sum = sum + lastDigit;
        num = Math.floor(num / 10);
    }

    return sum;
}

function superDigit(num) {
    let result = sumOfDigits(num);

    if (result % 10 == result) {
        return;
    } else {
        return sumOfDigits(result);
    }
}

console.log(superDigit(12316089));
