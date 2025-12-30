function factorial(n) {
    if (n == 1) {
        return 1;
    }

    return factorial(n - 1) * n;
}

const result = factorial(5);
console.log(result);
