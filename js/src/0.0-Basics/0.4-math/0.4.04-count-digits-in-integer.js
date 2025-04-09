function countDigits(num) {
    let counter = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        counter = counter + 1;
    }

    console.log(counter);
}

console.clear();
countDigits(123456789);
