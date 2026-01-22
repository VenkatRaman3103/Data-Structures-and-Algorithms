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

const ROWS = grid.length;
const COLS = grid[0].length;

function clearScreen() {
    process.stdout.write('\x1b[2J\x1b[H');
}

function printMat(mat, highlightR, highlightC) {
    clearScreen();
    console.log('Grid Animation - Neighbors of Each Element\n');

    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            const isCenter = r === highlightR && c === highlightC;
            const isNeighbor = mat[r][c] !== 0 && !isCenter;

            let output;
            if (mat[r][c] === 0) {
                output = `  `;
            } else {
                let num = mat[r][c].toString();
                if (num.length === 1) num = `` + num;

                if (isCenter) {
                    output = `\x1b[1;31m${num}\x1b[0m `;
                } else if (isNeighbor) {
                    output = `\x1b[1;32m${num}\x1b[0m `;
                } else {
                    output = `\x1b[90m${num}\x1b[0m `;
                }
            }
            process.stdout.write(output);
        }
        console.log();
    }

    console.log(
        '\n\x1b[1mCenter Element:\x1b[0m',
        grid[highlightR][highlightC]
    );
    console.log(
        '\x1b[32mGreen\x1b[0m = Neighbors, \x1b[31mRed\x1b[0m = Center'
    );
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animate() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const mat = Array(ROWS)
                .fill()
                .map(() => Array(COLS).fill(0));

            mat[r][c] = grid[r][c];

            for (let [mr, mc] of dirs) {
                let nr = r + mr;
                let nc = c + mc;

                if (nr < ROWS && nc < COLS && nr >= 0 && nc >= 0) {
                    mat[nr][nc] = grid[nr][nc];
                }
            }

            printMat(mat, r, c);
            await sleep(1000);
        }
    }

    clearScreen();
    console.log(
        '\x1b[32mAnimation complete! \x1b[90mPress Ctrl+C to exit\x1b[0m'
    );
}

process.on('SIGINT', () => {
    clearScreen();
    console.log('\nAnimation stopped by user');
    process.exit(0);
});

animate().catch(console.error);
