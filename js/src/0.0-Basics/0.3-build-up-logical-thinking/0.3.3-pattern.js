function patter_3() {
    let row = 5;
    let column = 5;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 1; x <= y; x++) {
            process.stdout.write(String(x));
        }

        console.log();
    }
}

patter_3();
