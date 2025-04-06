function log(val) {
    process.stdout.write(String(val));
}

function pattern_19() {
    let chars = ['a', 'b', 'c', 'd', 'e'];

    let row = 5;
    let column = 10;

    for (let y = row - 1; y >= 0; y--) {
        for (let x = column; x >= 0; x--) {
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

        console.log(y);
    }
}

pattern_19();
