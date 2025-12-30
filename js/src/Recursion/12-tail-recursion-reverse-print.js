export function reversePrint(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    reversePrint(n - 1);
}

reversePrint(10);
