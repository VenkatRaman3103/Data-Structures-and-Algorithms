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

    print() {
        if (this.head == null) {
            return [];
        }

        let res = [];

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);

            curr = curr.next;
        }

        console.log(res);

        return res;
    }
}

function fmt(a, b) {
    return `${a},${b}`;
}

var orangesRotting = function (grid) {
    let visisted = new Set();

    let q = new QueueStruct();

    let ROWS = grid.length;
    let COLS = grid[0].length;
    let dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let fresh = 0;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let element = grid[r][c];

            if (element == 2) {
                q.enqueue([r, c]);
                visisted.add(fmt(r, c));
            } else if (element == 1) {
                fresh += 1;
            }
        }
    }

    let count = 0;

    while (q.length > 0 && fresh > 0) {
        let qLength = q.length;

        for (let i = 0; i < qLength; i++) {
            let [r, c] = q.dequeue();

            for (let [dr, dc] of dirs) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr < ROWS &&
                    nc < COLS &&
                    nr >= 0 &&
                    nc >= 0 &&
                    !visisted.has(fmt(nr, nc)) &&
                    grid[nr][nc] == 1
                ) {
                    visisted.add(fmt(nr, nc));
                    q.enqueue([nr, nc]);
                    fresh -= 1;
                }
            }
        }

        count += 1;
    }

    return fresh === 0 ? count : -1;
};

// [[2,1,1],[1,1,0],[0,1,1]]
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
];

const result = orangesRotting(grid);
console.log(result);
