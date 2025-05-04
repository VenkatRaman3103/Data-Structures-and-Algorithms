function log(value) {
    process.stdout.write(String(value));
}

function printRectangle(n, m) {
    function printRow(n, m) {
        if (n == 0) {
            return;
        }

        function printColumn(m) {
            if (m == 0) {
                return;
            }

            log('*');
            printColumn(m - 1);
        }
        printColumn(m);

        console.log();
        printRow(n - 1, m);
    }

    printRow(n, m);
}

console.clear();
printRectangle(5, 50);
