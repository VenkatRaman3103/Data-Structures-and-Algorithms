function log(val) {
    process.stdout.write(String(val));
}

function pattern_17() {
    let chars = ['a', 'b', 'c', 'd', 'e'];

    let row = 5;
    let column = 5;

    for (let y = 0; y < row; y++) {
        for (let x = 0; x < column; x++) {
            if (x <= y) {
                log(chars[y]);
            } else {
                log(' ');
            }
        }

        console.log();
    }
}

pattern_17();
