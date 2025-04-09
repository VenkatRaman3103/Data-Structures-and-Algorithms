function countDigits(num) {
    let counter = 0;

    while (num > 0) {
        counter = counter + 1;
        num = Math.floor(num / 10);
    }

    return counter;
}

function isArmstrongNumber(num) {
    let givenNumber = num;

    let power = countDigits(num);

    let accumulator = 0;

    while (num > 0) {
        let lastNumber = num % 10;
        accumulator = accumulator + lastNumber ** power;
        num = Math.floor(num / 10);
    }

    console.log(accumulator == givenNumber);
}

console.clear();
isArmstrongNumber(93084);
