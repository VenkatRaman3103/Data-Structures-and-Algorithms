function sum_of_square_of_digits(num) {
    let accumulator = 0;

    while (num > 0) {
        let lastNumber = num % 10;

        let squared = lastNumber * lastNumber;
        accumulator = accumulator + squared;

        num = Math.floor(num / 10);
    }

    return accumulator;
}

function isNumberHappy(num) {
    let cycle = [];

    while (!cycle.includes(num)) {
        console.log(num);
        cycle.push(num);
        num = sum_of_square_of_digits(num);
    }
    console.log(num);
    console.log(cycle);
}

// console.clear();
isNumberHappy(3);
