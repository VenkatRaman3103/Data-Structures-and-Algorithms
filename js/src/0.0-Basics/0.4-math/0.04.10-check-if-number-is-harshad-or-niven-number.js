function sumOfDigits(num) {
    let accumulator = 0;

    while (num > 0) {
        let lastNumber = num % 10;
        accumulator = accumulator + lastNumber;

        num = Math.floor(num / 10);
    }

    return accumulator;
}

function isHarshadNumber(num) {
    let givenNumber = num;

    let result = givenNumber % sumOfDigits(num) == 0;

    console.log(result);
}

console.clear();
isHarshadNumber(30);
