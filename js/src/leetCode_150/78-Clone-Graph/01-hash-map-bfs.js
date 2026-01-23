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

class _Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

const n1 = new _Node(1);
const n2 = new _Node(2);
const n3 = new _Node(3);
const n4 = new _Node(4);

n1.neighbors = [n2, n4];
n2.neighbors = [n1, n3];
n3.neighbors = [n2, n4];
n4.neighbors = [n1, n3];

var cloneGraph = function (node) {
    if (node == null) {
        return null;
    }

    let oldToNew = new Map();
    let cloneNode = new _Node(node.val);

    oldToNew.set(node, cloneNode);

    let q = new QueueStruct();
    q.enqueue(node);

    while (q.length > 0) {
        let curr = q.dequeue();
        let currNeighbors = curr.neighbors;

        for (let nei of currNeighbors) {
            if (!oldToNew.has(nei)) {
                oldToNew.set(nei, new _Node(nei.val));
                q.enqueue(nei);
            }

            oldToNew.get(curr).neighbors.push(oldToNew.get(nei));
        }
    }

    return oldToNew.get(node);
};

const result = cloneGraph(n1);
console.log(result);
