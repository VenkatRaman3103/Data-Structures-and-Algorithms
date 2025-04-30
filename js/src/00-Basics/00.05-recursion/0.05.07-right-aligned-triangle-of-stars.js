function log(value) {
    process.stdout.write(String(value));
}

function triangleOfStarts(n) {
    let row = n;
    let column = n;

    function printRows(row, column) {
        if (row === 0) {
            return;
        }

        function printColumns(j, column, row) {
            if (j === column + 1) {
                return;
            }

            if (j >= row) {
                log('*');
            } else if (j < row) {
                log(' ');
            }

            printColumns(j + 1, column, row);
        }

        printColumns(1, column, row);

        console.log();
        printRows(row - 1, column);
    }

    printRows(row, column);
}

console.clear();
triangleOfStarts(10);
