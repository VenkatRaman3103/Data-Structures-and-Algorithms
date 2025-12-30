function duringCall(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    duringCall(n - 1);
}

duringCall(5);
