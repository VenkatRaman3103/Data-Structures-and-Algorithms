function tailRecursion(n) {
    if (n == 0) {
        return 0;
    }

    return n + tailRecursion(n - 1);
}

const result = tailRecursion(5);
console.log(result);
