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
        // this.adjList[v2].push(v1);
    }
}

const g = new Graph();

g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);

console.log(g.adjList);

function bfs(graph, start) {
    let q = new Queue();
    q.enqueue(start);

    while (q.length > 0) {
        let vertex = q.dequeue();

        console.log(vertex);

        let children = graph[vertex];

        for (let child of children) {
            q.enqueue(child);
        }
    }
}

bfs(g.adjList, 0);
