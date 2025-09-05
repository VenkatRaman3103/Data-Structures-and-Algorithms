function log(value) {
    process.stdout.write(String(value));
}

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = n * 2; j >= 0; j--) {
            let mid = n;

            if (j > mid) {
                let p = j - mid;

                if (p >= i) {
                    log(' ');
                } else {
                    log('*');
                }
            } else {
                let q = mid - j;
                if (q >= i) {
                    log(' ');
                } else {
                    log('*');
                }
            }
        }
        console.log();
    }
}

pattern(5);
