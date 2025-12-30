function accumalator(n) {
    let acc = 0;

    function fn(n) {
        if (n == 0) {
            return;
        }

        acc += n;
        fn(n - 1);
    }
    fn(n);

    console.log(acc);
}

accumalator(4);
