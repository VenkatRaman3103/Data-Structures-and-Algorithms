function log(value) {
    process.stdout.write(String(value));
}

function pattern(n) {
    for (let i = 1; i < n + 1; i++) {
        for (let j = n; j > 0; j--) {
            if (j <= i) {
                log(j);
            } else {
                log(' ');
            }
        }
        console.log();
    }
}

pattern(5);
