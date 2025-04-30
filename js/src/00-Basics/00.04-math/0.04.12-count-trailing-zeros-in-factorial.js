function factorialNum(num) {
    let accumulator = 1;

    for (let i = 1; i <= num; i++) {
        accumulator = accumulator * i;
    }

    return accumulator;
}

function trialingZeros_1(num) {
    let factorial = factorialNum(num);

    let countZeros = 0;

    while (factorial > 0) {
        let lastNum = factorial % 10;
        if (lastNum == 0) {
            countZeros = countZeros + 1;
        } else {
            break;
        }
        factorial = Math.floor(factorial / 10);
    }

    return countZeros;
}

function trialingZeros_2(num) {
    let counter = 0;

    for (let i = 5; num / i >= 1; i *= 5) {
        counter += num / i;
    }

    return counter;
}

console.clear();
trialingZeros_1(15);
trialingZeros_2(15);
