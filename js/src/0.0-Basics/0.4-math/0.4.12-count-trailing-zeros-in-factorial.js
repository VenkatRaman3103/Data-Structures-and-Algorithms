function factorialOfNum(num) {
    let accumulator = 1;

    for (let i = 1; i <= num; i++) {
        accumulator = accumulator * i;
    }

    return accumulator;
}

console.clear();
factorialOfNum(5);
