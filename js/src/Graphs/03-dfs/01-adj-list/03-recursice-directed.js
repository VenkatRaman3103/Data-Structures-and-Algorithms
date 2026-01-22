class Graph {
    constructor() {
        this.adjList = {};
    }
    //

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

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

console.log(graph.adjList);

function dfs(graph, start, visited, res = []) {
    res.push(start);
    visited.add(start);

    let children = graph[start];

    for (let child of children) {
        if (!visited.has(child)) {
            dfs(graph, child, visited, res);
        }
    }

    return res;
}

const visited = new Set();

const result = dfs(graph.adjList, 1, visited);

console.log(result);
