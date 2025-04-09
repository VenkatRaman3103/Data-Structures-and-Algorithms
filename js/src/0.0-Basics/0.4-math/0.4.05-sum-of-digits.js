function countDigits(num) {
    let accumulator = 0;

    while (num > 0) {
        let lastNumber = num % 10;
        accumulator = accumulator + lastNumber;
        num = Math.floor(num / 10);
    }

    console.log(accumulator);
}

console.clear();
countDigits(12345679);
