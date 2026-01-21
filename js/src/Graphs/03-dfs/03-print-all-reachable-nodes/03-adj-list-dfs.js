class StackNode {
    constructor(val) {
        this.val = val;
        this.below = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);

        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.below = this.top;
            this.top = newNode;
        }

        this.size += 1;
    }

    pop() {
        if (this.top == null) {
            return null;
        }

        let val = this.top.val;

        this.top = this.top.below;

        this.size -= 1;

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

    let stack = new Stack();
    stack.push(start);
    visited.add(start);

    while (stack.size > 0) {
        let vertex = stack.pop();
        res.push(vertex);

        let neighbour = graph[vertex];

        for (let nei of neighbour) {
            if (!visited.has(nei)) {
                visited.add(nei);
                stack.push(nei);
            }
        }
    }

    return res;
}

const result = reachableNodes(graph.adjList, 0);
console.log(result);
