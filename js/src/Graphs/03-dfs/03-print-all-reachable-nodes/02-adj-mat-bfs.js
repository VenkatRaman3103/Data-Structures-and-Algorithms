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

class Graph {
    constructor(n) {
        this.adjMat = Array.from({ length: n }, () => Array(n).fill(0));
    }

    addEdge(v1, v2) {
        this.adjMat[v1][v2] = 1;
    }
}

const graph = new Graph(3);

graph.addEdge(0, 1);
graph.addEdge(1, 2);

function reachableNodes(graph, start) {
    let res = [];

    let visited = new Set();

    let q = new Queue();
    q.enqueue(start);
    visited.add(start);

    while (q.length > 0) {
        let vertex = q.dequeue();
        res.push(vertex);

        let neighbour = graph[vertex];

        for (let i = 0; i < neighbour.length; i++) {
            let nei = neighbour[i];

            if (nei == 1 && !visited.has(i)) {
                visited.add(i);
                q.enqueue(i);
            }
        }
    }

    return res;
}

const result = reachableNodes(graph.adjMat, 0);
console.log(result);
