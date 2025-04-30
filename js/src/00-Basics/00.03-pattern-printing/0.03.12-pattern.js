function log(val) {
    process.stdout.write(String(val));
}

function pattern_12() {
    let row = 5;
    let column = 5;

    let addRow = 0;

    for (let y = 1; y < row + 1; y++) {
        let addColumn = y + 1;
        for (let x = 1; x < y + 1; x++) {
            addColumn = addColumn - 1;

            if (addColumn % 2 == 0) {
                log('0');
            } else {
                log('1');
            }
        }
        addRow = addRow + 1;

        console.log();
    }
}

console.clear();
pattern_12();
