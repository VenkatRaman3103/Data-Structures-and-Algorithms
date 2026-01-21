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

    function dfs(graph, start) {
        res.push(start);
        visited.add(start);

        let neighbour = graph[start];

        for (let nei of neighbour) {
            if (!visited.has(nei)) {
                dfs(graph, nei);
            }
        }
    }

    dfs(graph, start);

    return res;
}

const result = reachableNodes(graph.adjList, 0);
console.log(result);
