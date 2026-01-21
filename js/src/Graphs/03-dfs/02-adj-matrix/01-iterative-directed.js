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

        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child == 1 && !visited.has(i)) {
                visited.add(i);
                stack.push(i);
            }
        }
    }

    return res;
}

const result = dfs(graph.adjMat, 1);
console.log(result);
