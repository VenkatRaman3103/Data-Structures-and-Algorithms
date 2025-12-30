function sum_1(n) {
    let sum = 0;

    function f(n) {
        if (n == 0) {
            return;
        }

        f(n - 1);
        sum_1 += n;
    }

    f(n);

    console.log(sum);
    return sum;
}

// sum_1(5);

function sum_2(n) {
    if (n == 0) {
        return 0;
    }

    return sum_2(n - 1) + n;
}
console.log(sum_2(5));
