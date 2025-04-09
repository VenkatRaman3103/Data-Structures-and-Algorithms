function countDigits(num) {
    let accumalator = 0;

    while (num > 0) {
        let lastNumber = num % 10;
        accumalator = accumalator + lastNumber;
        num = Math.floor(num / 10);
    }

    console.log(accumalator);
}

console.clear();
countDigits(12345679);
