function pattern_6() {
    let row = 5;
    let colums = 5;

    for (let y = 5; y > 0; y--) {
        for (let x = 1; x <= y; x++) {
            process.stdout.write(String(x));
        }

        console.log();
    }
}

console.clear();
pattern_6();
