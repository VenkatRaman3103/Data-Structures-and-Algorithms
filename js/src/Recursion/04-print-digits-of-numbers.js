function printDigits(n) {
    if (n == 0) {
        return;
    }

    let lastNum = n % 10;
    let num = Math.floor(n / 10);

    printDigits(num);

    console.log(lastNum);
}

printDigits(10101);
