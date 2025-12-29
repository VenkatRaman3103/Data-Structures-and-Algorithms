function sum(n) {
    let sum = 0;

    function f(n) {
        if (n == 0) {
            return;
        }

        f(n - 1);
        sum += n;
    }

    f(n);

    console.log(sum);
    return sum;
}

sum(5);
