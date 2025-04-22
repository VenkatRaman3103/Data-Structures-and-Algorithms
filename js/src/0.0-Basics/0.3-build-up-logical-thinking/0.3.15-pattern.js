function log(val) {
    process.stdout.write(String(val));
}

function pattern_15() {
    let row = 5;
    let column = 5;

    let arr = ['a', 'b', 'c', 'd', 'e'];

    for (let y = 0; y < row; y++) {
        for (let x of arr) {
            let ind = arr.indexOf(x);

            if (ind <= y) {
                log(x);
            } else {
                log(' ');
            }
        }
        console.log();
    }
}

console.clear();
pattern_15();
