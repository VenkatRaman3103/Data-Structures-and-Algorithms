function log(val) {
    process.stdout.write(String(val));
}

function patter_9() {
    let row = 5;
    let column = 10;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 1; x < column; x++) {
            if (x <= column - column / 2) {
                if (x >= y) {
                    log('*');
                } else {
                    log(' ');
                }
            } else {
                let key = column - x;

                if (key >= y) {
                    log('*');
                } else {
                    log(' ');
                }
            }
        }
        console.log();
    }
}

console.clear();
patter_9();
