const pattern_5 = (n) => {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(String('*'));
        }

        console.log();
    }
};

pattern_5(5);
