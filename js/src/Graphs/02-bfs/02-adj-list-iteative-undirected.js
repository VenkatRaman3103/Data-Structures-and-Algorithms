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
        this.adjList[v2].push(v1);
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(1, 3);
graph.addEdge(0, 2);

console.log(graph.adjList);

function bfs(graph, start) {
    let q = new Queue();
    q.enqueue(start);

    let visited = new Set();

    while (q.length > 0) {
        let vertex = q.dequeue();

        if (!visited.has(vertex)) {
            visited.add(vertex);
        }

        console.log(vertex);

        let children = graph[vertex];

        for (let child of children) {
            if (!visited.has(child)) {
                q.enqueue(child);
            }
        }
    }
}

bfs(graph.adjList, 0);
