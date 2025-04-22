function log(val) {
    process.stdout.write(String(val));
}

function pattern_18() {
    let chars = ['a', 'b', 'c', 'd', 'e'];

    let row = 5;
    let column = 10;

    for (let y = 0; y < row; y++) {
        for (let x = 1; x < column + 1; x++) {
            if (x <= column / 2) {
                if (x > y) {
                    log(chars[x - 1]);
                } else {
                    log(' ');
                }
            } else if (x - 1 > column / 2) {
                let element = column - x;

                if (element >= y) {
                    log(chars[element]);
                } else {
                    log(' ');
                }
            }
        }

        console.log();
    }
}

console.clear();
pattern_18();
