class DSU {
    constructor(n) {
        this.parent = [];

        this.rank = [];

        for (let i = 0; i < n + 1; i++) {
            this.parent.push(i);
            this.rank.push(0);
        }
    }

    find(n) {
        if (this.parent[n] != n) {
            this.parent[n] = this.find(this.parent[n]);
        }

        return this.parent[n];
    }

    union(v1, v2) {
        const rootV1 = this.find(v1);
        const rootV2 = this.find(v2);

        if (rootV1 == rootV2) {
            return false;
        }

        if (this.rank[rootV1] > this.rank[rootV2]) {
            this.parent[rootV2] = rootV1;
        } else if (this.rank[rootV2] > this.rank[rootV1]) {
            this.parent[rootV1] = rootV2;
        } else {
            this.parent[rootV2] = rootV1;
            this.rank[rootV1] += 1;
        }

        return true;
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const dsu = new DSU(edges.length);

    dsu.find(5);

    for (let [v1, v2] of edges) {
        if (dsu.union(v1, v2) == false) {
            return [v1, v2];
        }
    }

    return [];
};

const edges = [
    [1, 2],
    [1, 3],
    [2, 3],
];

const result = findRedundantConnection(edges);
console.log(result);
