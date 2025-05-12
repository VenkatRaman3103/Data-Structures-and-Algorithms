function log(value) {
    process.stdout.write(String(value));
}

function pattern_28() {
    const row = 5;
    const column = 10;

    for (let i = 1; i < row + 1; i++) {
        let count = i;
        for (let j = column; j >= 0; j--) {
            if (j > column / 2 + 1) {
                let key = j - column / 2;
                if (key <= i) {
                    log(count);
                    count += 1;
                } else {
                    log(' ');
                }
            } else if (j < column / 2) {
                let key = column / 2 - j;
                if (key <= i) {
                    log(count);
                    count -= 1;
                } else {
                    log(' ');
                }
            }
        }
        count = 0;

        console.log(' ', i);
    }
}

console.clear();
pattern_28();
