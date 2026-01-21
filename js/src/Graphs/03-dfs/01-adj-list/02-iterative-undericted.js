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

    print() {
        if (this.top == null) {
            return [];
        }

        let res = [];

        let curr = this.top;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.below;
        }

        console.log(res);
        return res;
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

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

function dfs(graph, start) {
    let res = [];

    let visited = new Set();

    let stack = new Stack();
    stack.push(start);
    visited.add(start);

    while (stack.size > 0) {
        let vertex = stack.pop();
        res.push(vertex);

        let children = graph[vertex];

        for (let child of children) {
            if (!visited.has(child)) {
                visited.add(child);
                stack.push(child);
            }
        }
    }

    return res;
}

const result = dfs(graph.adjList, 1);
console.log(result);
