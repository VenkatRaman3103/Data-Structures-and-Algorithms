function calcBinary(num) {
    if (num == 0) {
        return 0;
    }

    let binary = 0;
    let position = 1;

    while (num > 0) {
        const remainder = num % 2;
        binary = binary + remainder * position;
        position *= 10;

        num = Math.floor(num / 2);
    }

    return binary;
}

console.clear();
console.log(calcBinary(5));
