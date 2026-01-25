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

const grid = [
    [2, 1, 1, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 2],
    [0, 0, 1, 1],
];
let ROWS = grid.length;
let COLS = grid[0].length;

let q = new QueueStruct();

for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
        if (grid[r][c] == 2) {
            q.enqueue([r, c]);
        }
    }
}
