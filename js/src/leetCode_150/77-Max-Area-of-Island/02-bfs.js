class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class QueueStruct {
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
            const element = grid[r][c];
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

function sleep(ms) {
    let end = Date.now() + ms;

    while (Date.now() < end) {}
}

function fmt(a, b) {
    return `${a},${b}`;
}

var maxAreaOfIsland = function (grid) {
    let maxArea = 0;

    let ROWS = grid.length;
    let COLS = grid[0].length;

    let dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let visited = new Set();

    function bfs(sr, sc) {
        let area = 0;

        let q = new QueueStruct();
        q.enqueue([sr, sc]);
        visited.add(fmt(sr, sc));

        while (q.length > 0) {
            let [r, c] = q.dequeue();
            area += 1;

            grid[r][c] = 'v';
            console.clear();
            printGrid(grid);
            console.log(`maxarea: ${maxArea}`);
            console.log(`area: ${area}`);

            sleep(200);

            for (let [dr, dc] of dirs) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nc < COLS &&
                    nr < ROWS &&
                    !visited.has(fmt(nr, nc)) &&
                    grid[nr][nc] == 1
                ) {
                    visited.add(fmt(nr, nc));
                    q.enqueue([nr, nc]);
                }
            }
        }

        maxArea = Math.max(maxArea, area);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] == 1 && !visited.has(fmt(r, c))) {
                bfs(r, c);
            }
        }
    }

    return maxArea;
};

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

const result = maxAreaOfIsland(grid);
console.log(result);
