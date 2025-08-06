const log = (value) => {
    process.stdout.write(String(value));
};

const pattern_1 = (num) => {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            log('*');
        }
        console.log('\r');
    }
};

pattern_1(5);
