class StackNode {
    constructor(val) {
        this.val = val;
        this.below = null;
    }
}

class StackStruct {
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
            console.log(null);
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

function fmt(a, b) {
    return `${a},${b}`;
}

var pacificAtlantic = function (heights) {
    let dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let pac = new Set();
    let alt = new Set();

    let ROWS = heights.length;
    let COLS = heights[0].length;

    function dfs(cr, cc, visited) {
        let stack = new StackStruct();
        stack.push([cr, cc]);

        visited.add(fmt(cr, cc));

        while (stack.size > 0) {
            let [r, c] = stack.pop();

            for (let [dr, dc] of dirs) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr < ROWS &&
                    nc < COLS &&
                    nr >= 0 &&
                    nc >= 0 &&
                    !visited.has(fmt(nr, nc)) &&
                    heights[r][c] <= heights[nr][nc]
                ) {
                    stack.push([nr, nc]);
                    visited.add(fmt(nr, nc));
                }
            }
        }
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac);
        dfs(ROWS - 1, c, alt);
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac);
        dfs(r, COLS - 1, alt);
    }

    let res = [];

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (pac.has(fmt(r, c)) && alt.has(fmt(r, c))) {
                res.push([r, c]);
            }
        }
    }

    console.log(res);
};

const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];

const result = pacificAtlantic(heights);
console.log(result);
