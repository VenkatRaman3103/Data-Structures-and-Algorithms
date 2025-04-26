function log(value) {
    process.stdout.write(String(value));
}

function reverseTriangleOfNumber(n) {
    let row = n;
    let column = n + 1;

    function printRows(i, column) {
        if (i == 0) {
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
        printRows(i - 1, column);
    }
    printRows(row, column);
}

console.clear();
reverseTriangleOfNumber(5);
