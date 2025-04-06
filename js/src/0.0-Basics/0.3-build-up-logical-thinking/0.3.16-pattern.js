function log(val) {
    process.stdout.write(String(val));
}

function pattern_16() {
    let chars = ['a', 'b', 'c', 'b', 'd'];
    let ind = 0;

    let row = chars.length;
    let column = 5;

    for (let y = row - 1; y >= 0; y--) {
        for (let x = 0; x < column; x++) {
            if (x <= y) {
                log(chars[ind]);
            } else {
                log(' ');
            }
            ind = ind + 1;
        }

        ind = 0;

        console.log();
    }
}

pattern_16();
