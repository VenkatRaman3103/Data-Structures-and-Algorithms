class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    enqueue(val) {
        let newNode = new QueueNode(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    dequeue() {
        if (this.head == null) {
            return null;
        }

        let val = this.head.val;

        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        this.length -= 1;

        return val;
    }
}

function printGrid(grid) {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                process.stdout.write('██');
            } else if (grid[r][c] === '▒') {
                process.stdout.write('▒▒');
            } else {
                process.stdout.write('░░');
            }
        }
        console.log();
    }
    console.log();
}

function fmt([a, b]) {
    return `${a},${b}`;
}

const grid = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
];
let ROWS = grid.length;
let COLS = grid[0].length;
let visited = new Set();
let dirs = [
    [1, 0], //down
    [0, 1], // right
    [-1, 0], // up
    [0, -1], // left
];

let q = new Queue();
q.enqueue([0, 0]);
visited.add(fmt([0, 0]));

while (q.length > 0) {
    let [r, c] = q.dequeue();

    grid[r][c] = '▒';
    printGrid(grid);

    for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;

        if (
            nr < ROWS &&
            nc < COLS &&
            nr >= 0 &&
            nc >= 0 &&
            !visited.has(fmt([nr, nc])) &&
            grid[nr][nc] != 1
        ) {
            q.enqueue([nr, nc]);
            visited.add(fmt([nr, nc]));
        }
    }
}
