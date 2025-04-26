function log(val) {
    process.stdout.write(String(val));
}
function patter_10() {
    let row = 10;
    let column = 10;

    for (let y = row; y > 0; y--) {
        for (let x = 1; x < column; x++) {
            if (x <= column / 2) {
                if (y >= row / 2) {
                    if (x <= y - row / 2) {
                        log(' ');
                    } else {
                        log('*');
                    }
                } else if (y < row / 2) {
                    if (x > row / 2 - y) {
                        log('*');
                    } else {
                        log(' ');
                    }
                }
            } else {
                let key = column - x;

                if (y >= row / 2) {
                    if (key <= y - row / 2) {
                        log(' ');
                    } else {
                        log('*');
                    }
                } else if (y < row / 2) {
                    if (key > row / 2 - y) {
                        log('*');
                    } else {
                        log(' ');
                    }
                }
            }
        }

        console.log();
    }
}

console.clear();
patter_10();
