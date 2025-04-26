function log(val) {
    process.stdout.write(String(val));
}

function patter_13() {
    let row = 5;
    let column = 10;

    for (let y = 1; y < row; y++) {
        for (let x = 1; x < column; x++) {
            if (x <= column / 2) {
                if (x <= y) {
                    log(x);
                } else {
                    log(' ');
                }
            } else {
                let key = column - x;

                if (key <= y) {
                    log(key);
                } else {
                    log(' ');
                }
            }
        }

        console.log();
    }
}

console.clear();
patter_13();
