function log(val) {
    process.stdout.write(String(val));
}

function patter_14() {
    let row = 5;
    let column = 5;

    let counter = 1;

    for (let y = 1; y < row + 1; y++) {
        for (let x = 0; x < y; x++) {
            log(`${counter} `);
            counter = counter + 1;
        }
        console.log();
    }
}

patter_14();
