const log = (value) => {
    process.stdout.write(String(value));
};

const pattern_2 = (num) => {
    for (let i = 1; i < num + 1; i++) {
        for (let j = 0; j < i; j++) {
            log('*');
        }
        console.log();
    }
};
pattern_2(9);
