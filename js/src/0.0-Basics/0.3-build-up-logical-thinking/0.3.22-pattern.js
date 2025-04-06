function log(val) {
    process.stdout.write(String(val));
}

function pattern_22() {
    let column = 10;
    let row = 5;

    for (let y = 1; y < row + 1; y++) {
        let counter = 1;

        for (let x = column; x >= 0; x--) {
            if (x > column / 2) {
                let x_element = x - column / 2;

                if (x_element < y) {
                    log(counter);
                    counter = counter + 1;
                } else {
                    log(' ');
                }
            } else if (x <= column / 2) {
                let y_element = column / 2 - x;

                if (y_element < y) {
                    log(counter);
                    counter = counter - 1;
                } else {
                    log(' ');
                }
            }
        }
        counter = 1;
        console.log();
    }
}

pattern_22();
