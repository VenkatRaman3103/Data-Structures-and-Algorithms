function findDivisor(num) {
    let divisors = [];

    for (let x = 0; x < num; x++) {
        if (num % x == 0) {
            divisors.push(x);
        }
    }

    return divisors;
}

function isPerfectNumber(num) {
    let divisors = findDivisor(num);

    let accumulator = 0;

    for (let element of divisors) {
        accumulator = accumulator + element;
    }

    console.log(num == accumulator);
}

console.clear();
isPerfectNumber(29);
