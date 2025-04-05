function log(val) {
    process.stdout.write(String(val));
}
//

function pattern_11() {
    let row = 10;
    let column = 5;

    for (let y = 1; y < row; y++) {
        for (let x = 1; x < column + 1; x++) {
            if (y <= row / 2) {
                if (x <= y) {
                    log('*');
                } else {
                    log(' ');
                }
            } else {
                if (x <= row - y) {
                    log('*');
                } else {
                    log(' ');
                }
            }
        }
        console.log();
    }
}

pattern_11();
