const pattern_3 = (num) => {
    for (let i = 1; i < num + 1; i++) {
        for (let j = 1; j < i + 1; j++) {
            process.stdout.write(String(j));
        }
        console.log();
    }
};

pattern_3(5);
