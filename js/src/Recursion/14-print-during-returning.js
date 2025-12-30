function duringReturn(n) {
    if (n == 0) {
        return;
    }

    duringReturn(n - 1);
    console.log(n);
}

duringReturn(5);
