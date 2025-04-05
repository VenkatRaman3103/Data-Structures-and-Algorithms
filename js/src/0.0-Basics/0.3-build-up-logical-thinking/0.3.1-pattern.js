function pattern_1() {
    let row = 5;
    let column = 5;

    for (let y = 0; y < row; y++) {
        for (let x = 0; x < column; x++) {
            process.stdout.write('*');
        }
        console.log('');
    }
}

pattern_1();
