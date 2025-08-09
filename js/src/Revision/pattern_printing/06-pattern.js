export const patter_06 = (n) => {
    for (let i = n; i > 0; i--) {
        for (let j = 1; j < i + 1; j++) {
            process.stdout.write(String(j));
        }
        console.log();
    }
};

patter_06(5);
