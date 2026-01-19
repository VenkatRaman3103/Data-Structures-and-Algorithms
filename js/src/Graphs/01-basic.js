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

const g = new Graph();

g.addVertex(1);
g.addVertex(2);
g.addEdge(1, 2);

console.log(g.adjList);

const adjMatrix = Array.from({ length: 5 }, () => Array(5).fill(0));

adjMatrix[1][2] = 1;
adjMatrix[2][1] = 1;

console.log(adjMatrix);
