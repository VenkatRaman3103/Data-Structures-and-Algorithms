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
            console.log([]);
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

var solve = function (board) {
    let ROWS = board.length;
    let COLS = board[0].length;

    let dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    function dfs(sr, sc) {
        let stack = new StackStruct();
        stack.push([sr, sc]);
        board[sr][sc] = 'T';

        while (stack.size > 0) {
            let [r, c] = stack.pop();

            for (let [dr, dc] of dirs) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    board[nr][nc] == 'O'
                ) {
                    stack.push([nr, nc]);
                    board[nr][nc] = 'T';
                }
            }
        }
    }

    for (let c = 0; c < COLS; c++) {
        if (board[0][c] == 'O') {
            dfs(0, c);
        }

        if (board[ROWS - 1][c] == 'O') {
            dfs(ROWS - 1, c);
        }
    }

    for (let r = 0; r < ROWS; r++) {
        if (board[r][0] == 'O') {
            dfs(r, 0);
        }

        if (board[r][COLS - 1] == 'O') {
            dfs(r, COLS - 1);
        }
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] == 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] == 'T') {
                board[r][c] = 'O';
            }
        }
    }

    return board;
};

const board = [
    ['X', 'X', 'X', 'X', 'O'],
    ['X', 'X', 'X', 'O', 'O'],
    ['X', 'O', 'O', 'X', 'O'],
    ['X', 'X', 'O', 'X', 'X'],
    ['X', 'O', 'X', 'X', 'X'],
];

const result = solve(board);
console.log(result);
