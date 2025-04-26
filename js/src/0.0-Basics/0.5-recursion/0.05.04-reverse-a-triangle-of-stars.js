function log(value) {
    process.stdout.write(String(value));
}

function reverseTriangle(n) {
    let row = n;
    let column = n + 1;

    function printRows(i, row, column) {
        if (i == 0) {
            return;
        }

        function printColumns(j, i, row, column) {
            if (j == column) {
                return;
            }

            if (j <= i) {
                log('*');
            } else if (j > i) {
                log(' ');
            }
            printColumns(j + 1, i, row, column);
        }
        printColumns(1, i, row, column);

        console.log();
        printRows(i - 1, row, column);
    }

    printRows(row, row, column);
}

console.clear();
reverseTriangle(5);
