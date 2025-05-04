function printOneToN(n, count = 1) {
    if (count == n) {
        return;
    }

    console.log(count);

    printToN(n, count + 1);
}

console.clear();
printOneToN(5);
