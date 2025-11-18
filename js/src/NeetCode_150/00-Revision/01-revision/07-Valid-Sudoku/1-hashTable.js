var isValidSudoku = function (board) {
    let rows = {};
    let columns = {};
    let boxes = {};

    for (let r = 0; r < board[0].length; r++) {
        for (let c = 0; c < board.length; c++) {
            let val = board[r][c];
            if (val == '.') {
                continue;
            }

            let row = `row_${r}_${val}`;
            let col = `col_${c}_${val}`;
            let box = `box_${Math.floor(r / 3)}_${Math.floor(c / 3)}_${val}`;

            if (
                rows[row] != undefined ||
                columns[col] != undefined ||
                boxes[box] != undefined
            ) {
                return false;
            }

            rows[row] = 1;
            columns[col] = 1;
            boxes[box] = 1;
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
console.log(result);
