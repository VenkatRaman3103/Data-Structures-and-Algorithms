function count(n) {
    let staticVar = 0;

    function fn(n) {
        if (n == 0) {
            return;
        }

        staticVar += 1;
        fn(n - 1);
    }
    fn(n);

    console.log(staticVar);
}

count(10);
