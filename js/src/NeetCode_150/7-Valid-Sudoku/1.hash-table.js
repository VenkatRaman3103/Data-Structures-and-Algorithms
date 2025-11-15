var isValidSudoku = function (board) {
    let rows = new Set();
    let columns = new Set();
    let boxes = new Set();

    for (let r = 0; r < board[0].length; r++) {
        for (let c = 0; c < board.length; c++) {
            if (board[r][c] == '.') {
                continue;
            }
            const val = board[r][c];

            const row = `row-${r}-${val}`;
            const col = `col-${c}-${val}`;
            const box = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${val}`;

            if (rows.has(row) || columns.has(col) || boxes.has(box)) {
                return false;
            }

            rows.add(row);
            columns.add(col);
            boxes.add(box);
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
