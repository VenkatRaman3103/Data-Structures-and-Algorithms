function numberOfDigits(num, count = 0) {
    if (num == 0) {
        return count;
    }

    num = Math.floor(num / 10);

    return numberOfDigits(num, count + 1);
}

console.clear();
console.log(numberOfDigits(12345901092));
