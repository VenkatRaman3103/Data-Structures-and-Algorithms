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
        this.adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));
    }

    addEdge(v1, v2) {
        this.adjMatrix[v1][v2] = 1;
        // this.adjMatrix[v2][v1] = 1;
    }
}

const graph = new Graph(5);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph.adjMatrix);

function bfs(graph, start) {
    let q = new Queue();
    q.enqueue(start);

    let visited = new Set();
    visited.add(start);

    while (q.length > 0) {
        let vertex = q.dequeue();

        console.log(vertex);

        let children = graph[vertex];

        for (let i = 0; i < children.length; i++) {
            let child = children[i];

            if (child != 0 && !visited.has(i)) {
                visited.add(i);
                q.enqueue(i);
            }
        }
    }
}

bfs(graph.adjMatrix, 1);
