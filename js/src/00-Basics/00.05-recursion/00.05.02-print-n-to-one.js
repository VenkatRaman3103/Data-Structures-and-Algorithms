function printNToOne(n) {
    if (n == 0) {
        return;
    }

    console.log(n);

    printNToOne(n - 1);

    return 0;
}

console.clear();
printNToOne(5);
