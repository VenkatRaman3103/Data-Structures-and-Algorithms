const isPowerOfTwo = (n) => {
    if (n % 2 != 0) return false;
    if (n < 1) return false;

    let num = 1;

    while (num < n) {
        num = num * 2;
    }

    return num == n;
};

console.log(isPowerOfTwo(32));
