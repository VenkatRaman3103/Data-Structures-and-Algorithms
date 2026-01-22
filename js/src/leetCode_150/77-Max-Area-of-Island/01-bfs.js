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

var maxAreaOfIsland = function (grid) {
    let maxArea = 0;

    let visited = new Set();

    let ROWS = grid.length;
    let COLUMNS = grid[0].length;

    let dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    function bfs(sr, sc) {
        let area = 0;

        let q = new QueueStruct();
        q.enqueue([sr, sc]);
        visited.add(`${sr},${sc}`);

        area += 1;

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
                    !visited.has(`${nr},${nc}`) &&
                    grid[nr][nc] == '1'
                ) {
                    q.enqueue([nr, nc]);
                    visited.add(`${nr},${nc}`);
                    area += 1;
                }
            }
        }

        maxArea = Math.max(maxArea, area);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLUMNS; c++) {
            if (!visited.has(`${r},${c}`) && grid[r][c] == '1') {
                bfs(r, c);
            }
        }
    }

    return maxArea;
};

const grid = [
    ['1', '1', '1', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

const result = maxAreaOfIsland(grid);
console.log(result);
