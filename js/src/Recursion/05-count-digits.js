function countDigits(n) {
    let count = 0;

    function fn(n) {
        if (n == 0) {
            return;
        }

        count += 1;

        n = Math.floor(n / 10);

        fn(n);
    }
    fn(n);

    console.log(count);
    return count;
}

countDigits(111111);
