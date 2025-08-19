function log(value) {
    process.stdout.write(String(value));
}

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 1; j < n * 2; j++) {
            if (j < n) {
                if (j >= i) {
                    log('*');
                } else {
                    log(' ');
                }
            } else if (j >= n) {
                let key = n * 2 - j;
                if (key >= i) {
                    log('*');
                } else {
                    log(' ');
                }
            }
        }
        console.log();
    }
}

pattern(5);
