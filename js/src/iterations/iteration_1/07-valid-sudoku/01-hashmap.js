/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rowSet = new Set();
    let colSet = new Set();
    let boxSet = new Set();

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] == '.') {
                continue;
            }

            let v = board[r][c];

            let rowKey = `row_${r}_${v}`;
            let colKey = `col_${c}_${v}`;

            let boxKey = `box_${Math.floor(r / 3)}_${Math.floor(c / 3)}_${v}`;

            if (
                rowSet.has(rowKey) ||
                colSet.has(colKey) ||
                boxSet.has(boxKey)
            ) {
                return false;
            }

            rowSet.add(rowKey);
            colSet.add(colKey);
            boxSet.add(boxKey);
        }
    }

    return true;
};

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const result = isValidSudoku(board);
console.log(result);
