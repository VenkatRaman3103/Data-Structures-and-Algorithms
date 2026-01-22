const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const dirs = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
];

const element = [1, 1];

// for (let [mr, mc] of dirs) {
//     let nr = element[0] + mr;
//     let nc = element[1] + mc;
//
//     console.log(grid[nr][nc]);
// }

let ROWS = grid.length;
let COLS = grid.length;

function printMat(mat) {
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            if (mat[r][c] == 0) {
                process.stdout.write('  ');
            } else {
                process.stdout.write(`${mat[r][c]} `);
            }
        }
        console.log();
    }
}

for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
        const mat = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];

        mat[r][c] = grid[r][c];

        for (let [mr, mc] of dirs) {
            let nr = r + mr;
            let nc = c + mc;

            if (nr < ROWS && nc < COLS && nr >= 0 && nc >= 0) {
                mat[nr][nc] = grid[nr][nc];
            }
        }
        printMat(mat);
        console.log();
    }
}
