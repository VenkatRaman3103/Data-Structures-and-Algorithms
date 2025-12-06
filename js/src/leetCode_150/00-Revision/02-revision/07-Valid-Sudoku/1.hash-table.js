export var isValidSudoku = function (board) {
    let ROW = board.length;
    let COLUMN = board[0].length;

    let columns = {};
    let rows = {};
    let boxes = {};

    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COLUMN; c++) {
            let val = board[r][c];

            if (val == '.') {
                continue;
            }

            let row_key = `row_${r}_${val}`;
            let col_key = `row_${c}_${val}`;
            let box_key = `box_${r / 3}_${c / 3}_${val}`;

            if (columns[col_key] || rows[row_key] || boxes[box_key]) {
                return false;
            }

            columns[col_key] = 1;
            rows[row_key] = 1;
            boxes[box_key] = 1;
        }
    }
    return true;
};

const board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
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
