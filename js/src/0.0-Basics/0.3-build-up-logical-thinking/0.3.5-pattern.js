function pattern_5() {
    let row = 5;
    let column = 5;

    for (let y = 5; y > 0; y--) {
        for (let x = 0; x < y; x++) {
            process.stdout.write('*');
        }

        console.log();
    }
}

pattern_5();
