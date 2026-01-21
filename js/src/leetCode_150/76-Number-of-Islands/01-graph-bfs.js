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

var numIslands = function (grid) {
    let visited = new Set();

    let count = 0;

    let ROWS = grid.length;
    let COLUMNS = grid[0].length;

    let dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    function bfs(sr, sc) {
        let q = new Queue();
        q.enqueue([sr, sc]);
        visited.add(`${sr},${sc}`);

        while (q.length > 0) {
            let [r, c] = q.dequeue();

            for (let [dr, dc] of dirs) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr < ROWS &&
                    nc < COLUMNS &&
                    nr >= 0 &&
                    nc >= 0 &&
                    grid[nr][nc] == '1' &&
                    !visited.has(`${nr},${nc}`)
                ) {
                    q.enqueue([nr, nc]);
                    visited.add(`${nr},${nc}`);
                }
            }
        }
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLUMNS; c++) {
            if (grid[r][c] == '1' && !visited.has(`${r},${c}`)) {
                count += 1;
                bfs(r, c);
            }
        }
    }

    return count;
};

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

const result = numIslands(grid);
console.log(result);
