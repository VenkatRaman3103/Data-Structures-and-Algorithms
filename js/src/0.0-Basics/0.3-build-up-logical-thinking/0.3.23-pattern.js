function log(val) {
    process.stdout.write(String(val));
}

function pattern_23() {
    let chars = ['a', 'b', 'c', 'd', 'e'];

    let row = 5;
    let column = 5;

    for (let y = row - 1; y >= 0; y--) {
        let element = y;

        for (let x = 0; x < column; x++) {
            if (element < column) {
                log(chars[element]);
                element = element + 1;
            } else {
                log(' ');
            }
        }
        console.log(' ', y);
    }

    console.log();

    return 0;
}

pattern_23();
