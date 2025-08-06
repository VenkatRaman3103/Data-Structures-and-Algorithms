export const largestLocal = (grid) => {
    const frame = getResultGridFrame(grid);
    const n = frame[0].length;

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            let max = 0;

            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                    max = Math.max(grid[i][j], max);
                }
            }
            frame[x][y] = max;
        }
    }

    return frame;
};

export const getResultGridFrame = (grid) => {
    const resultGrid = [];

    // result grid
    const n = grid[0].length;
    const frame = Math.abs(n - 2);

    for (let i = 0; i < frame; i++) {
        const row = [];
        for (let j = 0; j < frame; j++) {
            row.push(0);
        }

        resultGrid.push(row);
    }

    return resultGrid;
};

const grid = [
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
];

const result = largestLocal(grid);
console.log(result);
