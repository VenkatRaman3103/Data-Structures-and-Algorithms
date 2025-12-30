function treeRecursion(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    treeRecursion(n - 1);
    treeRecursion(n - 1);
}

treeRecursion(3);
