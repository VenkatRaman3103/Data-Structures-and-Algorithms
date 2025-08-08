const log = (value) => {
    process.stdout.write(String(value));
};

const pattern_4 = (n) => {
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j <= i; j++) {
            log(j);
        }

        console.log();
    }
};

// pattern_4(5);

// recursion
const pattern_4_recursion = (n) => {
    const rows = (i) => {
        if (i == n + 1) {
            return;
        }

        const columns = (j) => {
            if (j >= i + 1) {
                return;
            }

            log(j);

            columns(j + 1);
        };

        columns(1);
        console.log();

        rows(i + 1);
    };

    rows(1);
};

pattern_4_recursion(5);
