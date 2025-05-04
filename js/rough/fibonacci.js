function sum(a, b) {
    console.log(a + b);
    return a + b;
}

function fibo(num) {
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 0; i < num - 2; i++) {
        let temp = b;
        b = sum(a, b);
        a = temp;
    }
}

console.clear();
fibo(9);
