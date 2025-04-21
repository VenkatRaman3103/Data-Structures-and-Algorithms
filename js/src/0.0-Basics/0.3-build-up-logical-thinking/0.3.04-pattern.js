function pattern_4() {
    let row = 5;
    let column = 5;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 1; x <= y; x++) {
            process.stdout.write(String(y));
        }

        console.log();
    }
}

console.clear();
pattern_4();
