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
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (this.adjList[v] == undefined) {
            this.adjList[v] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
    }
}

const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);

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

        let neighour = graph[vertex];

        for (let nei of neighour) {
            if (!visited.has(nei)) {
                q.enqueue(nei);
                visited.add(nei);
            }
        }
    }

    return res;
}

const result = reachableNodes(graph.adjList, 0);
console.log(result);
