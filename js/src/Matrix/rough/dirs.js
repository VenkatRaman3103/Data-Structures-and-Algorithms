const grid = [
    [1, 0, 3, 4, 5],
    [0, 0, 0, 4, 5],
    [1, 0, 3, 0, 5],
    [1, 2, 0, 4, 5],
    [1, 2, 3, 4, 5],
];

const dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
];

const ROWS = grid.length;
const COLUMNS = grid[0].length;

for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLUMNS; c++) {
        console.log(grid[r][c]);

        for (let [dr, dc] of dirs) {
            let rn = r + dr;
            let cn = c + dc;

            if (rn >= 0 && cn >= 0 && rn < ROWS && cn < COLUMNS) {
                console.log(grid[rn][cn]);
            }
        }

        console.log();
    }
}

console.log(grid);
