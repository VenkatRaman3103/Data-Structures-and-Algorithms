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

    let accumalator = 0;

    for (let element of divisors) {
        accumalator = accumalator + element;
    }

    console.log(num == accumalator);
}

console.clear();
isPerfectNumber(29);
