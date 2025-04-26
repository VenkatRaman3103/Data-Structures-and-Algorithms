function log(val) {
    process.stdout.write(String(val));
}

function pattern_26() {
    let row = 4;
    let column = 4;

    for (let y = 0; y < row; y++) {
        for (let x = 0; x < column; x++) {
            if (y == 0 || y == row - 1 || x == 0 || x == column - 1) {
                log('*');
            } else {
                log(' ');
            }
        }
        console.log();
    }
}

console.clear();
pattern_26();
