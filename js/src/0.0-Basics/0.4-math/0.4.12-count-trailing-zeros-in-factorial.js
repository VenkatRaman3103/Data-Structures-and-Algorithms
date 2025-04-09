function factorialOfNumber(num) {
    let accumulator = 1;

    for (let i = 1; i < num; i++) {
        accumulator = accumulator * i;
    }

    console.log(accumulator);
}

factorialOfNumber(5);
