function sleep(ms) {
    let end = Date.now() + ms;
    while (Date.now() < end) {
        //
    }
}

function printGrid(grid) {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let element = grid[r][c];
            if (element == 1) {
                process.stdout.write(`W `);
            } else if (element == 0) {
                process.stdout.write(`. `);
            } else {
                process.stdout.write(`* `);
            }
        }
        console.log();
    }
    console.log();
}

function fmt(a, b) {
    return `${a},${b}`;
}

const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let ROWS = grid.length;
let COLS = grid[0].length;

let dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

let visited = new Set();

function dfs(r, c) {
    visited.add(fmt(r, c));

    grid[r][c] = 'v';
    console.clear();
    printGrid(grid);

    sleep(200);

    for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;

        if (
            nr >= 0 &&
            nc >= 0 &&
            nc < COLS &&
            nr < ROWS &&
            grid[nr][nc] != 1 &&
            !visited.has(fmt(nr, nc))
        ) {
            dfs(nr, nc);
        }
    }
}

dfs(0, 0);
