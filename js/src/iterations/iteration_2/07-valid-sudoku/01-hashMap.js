/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rowMap = {};
    let colMap = {};
    let boxMap = {};

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            let val = board[r][c];

            if (val == '.') {
                continue;
            }

            let rowKey = `row_${r}_${val}`;
            let colKey = `col_${c}_${val}`;
            let boxKey = `box_${Math.floor(r / 3)}_${Math.floor(c / 3)}_${val}`;

            if (
                rowMap[rowKey] != undefined ||
                colMap[colKey] != undefined ||
                boxMap[boxKey] != undefined
            ) {
                return false;
            }

            rowMap[rowKey] = 1;
            colMap[colKey] = 1;
            boxMap[boxKey] = 1;
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
