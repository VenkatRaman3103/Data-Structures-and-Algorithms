function findFactorial(num) {
    let accumulator = 1;

    while (num > 0) {
        accumulator = accumulator * num;
        num = num - 1;
    }

    return accumulator;
}

function isNumberStrong(num) {
    let givenNumber = num;

    let accumulator = 0;

    while (num > 0) {
        let lastNumber = num % 10;
        let factorial = findFactorial(lastNumber);
        accumulator = accumulator + factorial;

        num = Math.floor(num / 10);
    }

    console.log(accumulator == givenNumber);
}

console.clear();
isNumberStrong(40585);
