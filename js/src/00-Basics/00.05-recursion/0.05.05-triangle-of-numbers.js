function log(value) {
    process.stdout.write(String(value));
}

function triangleOrNumbers(n) {
    let row = n + 1;
    let column = n + 1;

    function printRows(i, row, column) {
        if (i == row) {
            return;
        }

        function printColumns(j, i, column) {
            if (j == column) {
                return;
            }

            if (j <= i) {
                log(j);
            } else if (j > i) {
                log(' ');
            }
            printColumns(j + 1, i, column);
        }

        printColumns(1, i, column);

        console.log();
        printRows(i + 1, row, column);
    }

    printRows(1, row, column);
}

console.clear();
triangleOrNumbers(5);
