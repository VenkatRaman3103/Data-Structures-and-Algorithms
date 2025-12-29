function printFromN(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    printFromN(n - 1);

    return;
}

printFromN(5);
