function increasing(n) {
    let staticVar = 0;

    function fn(n) {
        if (n == 0) {
            return;
        }

        staticVar++;
        console.log(staticVar);

        fn(n - 1);
    }
    fn(n);
}

increasing(10);
