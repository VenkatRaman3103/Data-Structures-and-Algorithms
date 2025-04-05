function pattern_8() {
    let row = 5;
    let column = 5;

    for (let y = row; y > 0; y--) {
        for (let x = 1; x < column * 2; x++) {
            if (x <= column * 2 - column) {
                if (x < y) {
                    process.stdout.write(String(' '));
                } else {
                    process.stdout.write(String('*'));
                }
            } else if (x > column * 2 - column) {
                if (column * 2 - x < y) {
                    process.stdout.write(String(' '));
                } else {
                    process.stdout.write(String('*'));
                }
            }
        }

        console.log();
    }
}

pattern_8();
