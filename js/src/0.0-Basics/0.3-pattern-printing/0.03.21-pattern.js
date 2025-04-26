function log(val) {
    process.stdout.write(String(val));
}

function pattern_21() {
    let column = 5;
    let row = 5;

    for (let y = 1; y < row + 1; y++) {
        let counter = 1;

        for (let x = column; x > 0; x--) {
            if (x <= y) {
                log(counter);

                counter = counter + 1;
            } else {
                log(' ');
            }
        }
        counter = 1;
        console.log();
    }
}

console.clear();
pattern_21();
