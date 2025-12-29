function printToN(n) {
    if (n == 0) {
        return;
    }

    if (n > 0) {
        printToN(n - 1);
        console.log(n);
    }
}

printToN(5);
