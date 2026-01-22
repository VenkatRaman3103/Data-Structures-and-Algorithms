class StackNode {
    constructor(val) {
        this.val = val;
        this.below = null;
    }
}

class StackStruct {
    constructor() {
        this.top = null;

        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);

        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.below = this.top;
            this.top = newNode;
        }

        this.size += 1;
    }

    pop() {
        if (this.top == null) {
            return null;
        }

        let val = this.top.val;

        this.top = this.top.below;

        this.size -= 1;

        return val;
    }
}

function fmt(a, b) {
    return `${a},${b}`;
}

function printGrid(grid) {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const entry = grid[r][c];
            if (entry == 1) {
                process.stdout.write(`WW`);
            } else if (entry == 0) {
                process.stdout.write(`. `);
            } else if (entry == 'V') {
                process.stdout.write(`* `);
            }
        }
        console.log();
    }
    console.log();
}

function sleep(ms) {
    const end = Date.now() + ms;

    while (Date.now() < end) {}
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

let stack = new StackStruct();
stack.push([0, 0]);
visited.add(fmt(0, 0));

while (stack.size > 0) {
    let [r, c] = stack.pop();

    grid[r][c] = 'V';
    console.clear();
    printGrid(grid);

    sleep(200);

    for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;

        if (
            nr >= 0 &&
            nc >= 0 &&
            nr < ROWS &&
            nc < COLS &&
            grid[nr][nc] != 1 &&
            !visited.has(fmt(nr, nc))
        ) {
            stack.push([nr, nc]);
            visited.add(fmt(nr, nc));
        }
    }
}
