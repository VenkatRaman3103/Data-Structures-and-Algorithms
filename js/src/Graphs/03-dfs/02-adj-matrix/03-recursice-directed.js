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
    constructor(n) {
        this.adjMat = Array.from({ length: n }, () => Array(n).fill(0));
    }

    addEdge(v1, v2) {
        this.adjMat[v1][v2] = 1;
    }
}

const graph = new Graph(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

function dfs(graph, start, visited, res) {
    visited.add(start);
    res.push(start);

    const children = graph[start];

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        if (child == 1 && !visited.has(i)) {
            dfs(graph, i, visited, res);
        }
    }

    return res;
}

const visited = new Set();

const result = dfs(graph.adjMat, 1, visited, []);
console.log(result);
