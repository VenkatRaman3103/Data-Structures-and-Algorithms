function log(val) {
    process.stdout.write(String(val));
}

function pattern_27() {
    let row = 10;
    let column = 10;

    let end = (row + column) / 4;

    for (let y = 0; y <= row; y++) {
        let element = column / 2;

        for (let x = 0; x <= column; x++) {
            if (y <= row / 2) {
                if (x <= column / 2) {
                    log(` ${element}`);

                    if (end - y != element) {
                        element = element - 1;
                    }
                } else if (x >= column / 2) {
                    if (x - end > element) {
                        element = element + 1;
                    }
                    log(` ${element}`);
                }
            } else if (y > row / 2) {
                let key = column - y;
                if (x <= column / 2) {
                    log(` ${element}`);

                    if (end - key != element) {
                        element = element - 1;
                    }
                } else if (x >= column / 2) {
                    if (x - end > element) {
                        element = element + 1;
                    }
                    log(` ${element}`);
                }
            }
        }
        console.log();
    }

    return 0;
}

console.clear();
pattern_27();
