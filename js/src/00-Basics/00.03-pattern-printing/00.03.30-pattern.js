function log(value) {
    process.stdout.write(String(value));
}

function pattern() {
    let row = 10;
    let column = 10;

    for (let i = 0; i < row + 1; i++) {
        for (let j = 0; j < column; j++) {
            log(j);
        }

        let mid = row / 2;

        if (i <= mid) {
            console.log(i);
        } else if (i > mid) {
            let key = row - i;
            console.log(key);
        }
    }
}

console.clear();
pattern();
