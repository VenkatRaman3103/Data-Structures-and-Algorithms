function fibocnacciSeries(count) {
    function sum(a, b) {
        console.log(a + b);
        return a + b;
    }

    function fibo(a, b, count) {
        if (count > 0) {
            let temp = b;
            b = sum(a, b);
            a = temp;
            fibo(a, b, count - 1);
        }
    }

    console.log(0);
    console.log(1);

    fibo(0, 1, count - 2);
}

console.clear();
fibocnacciSeries(10);
