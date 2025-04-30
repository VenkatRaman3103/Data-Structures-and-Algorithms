function pattern_8() {
    let row = 5;
    let column = 5;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 5; x > 0; x--) {
            if (x <= y) {
                process.stdout.write(String(x));
            } else {
                process.stdout.write(' ');
            }
        }
        console.log();
    }
}

console.clear();
pattern_8();
