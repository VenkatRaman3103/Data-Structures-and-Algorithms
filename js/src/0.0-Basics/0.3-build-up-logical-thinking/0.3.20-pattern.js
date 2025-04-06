function log(val) {
    process.stdout.write(String(val));
}

function pattern_20() {
    let chars = ['a', 'b', 'c', 'd', 'e'];

    let row = 5;
    let column = 10;

    for (let y = 0; y <= row - 1; y++) {
        for (let x = column - 1; x > 0; x--) {
            if (x > column / 2) {
                let xIndex = x - column / 2;

                if (xIndex <= y) {
                    log(chars[xIndex]);
                } else {
                    log(' ');
                }
            } else if (x <= column / 2) {
                let yIndex = column / 2 - x;

                if (yIndex <= y) {
                    log(chars[yIndex]);
                } else {
                    log(' ');
                }
            }
        }
        console.log();
    }
}

pattern_20();
