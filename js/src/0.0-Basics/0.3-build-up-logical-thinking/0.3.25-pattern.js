function log(val) {
    process.stdout.write(String(val));
}

function pattern_25() {
    let row = 10;
    let column = 10;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 1; x <= column; x++) {
            if (x <= column / 2) {
                if (y <= row / 2) {
                    if (x <= y) {
                        log(x);
                    } else {
                        log(' ');
                    }
                } else if (y >= row / 2) {
                    if (x <= row - y) {
                        log(x);
                    } else {
                        log(' ');
                    }
                }
            } else if (x > column / 2) {
                let key = column - x + 1;
                if (y <= row / 2) {
                    if (key <= y) {
                        log(key);
                    } else {
                        log(' ');
                    }
                } else if (y >= row / 2) {
                    if (key <= row - y) {
                        log(key);
                    } else {
                        log(' ');
                    }
                }
            }
        }

        console.log();
    }

    console.log();
    return 0;
}

console.clear();
pattern_25();
