function patter_2() {
    let row = 5;
    let column = 5;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 0; x < y; x++) {
            process.stdout.write('*');
        }

        console.log();
    }
}

patter_2();
