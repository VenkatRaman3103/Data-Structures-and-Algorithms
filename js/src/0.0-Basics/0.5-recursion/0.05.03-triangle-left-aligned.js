function log(value) {
    process.stdout.write(String(value));
}

function triangleLeftAligned(n) {
    let row = n;
    let column = n;

    function printRows(row, column) {
        if (row == 0) {
            return;
        }

        function printColumns(row, column) {
            if (column == 0) {
                return;
            }

            if (column >= row) {
                log('*');
            } else if (column < row) {
                log(' ');
            }
            printColumns(row, column - 1);
        }
        printColumns(row, column);

        console.log();
        printRows(row - 1, column);
    }
    printRows(row, column);
}

console.clear();
triangleLeftAligned(10);
