class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        if (this.minStack.length == 0) {
            this.minStack.push(val);
        } else {
            let some = Math.min(val, this.minStack[this.minStack.length - 1]);
            this.minStack.push(some);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const val = 3;

var obj = new MinStack();
obj.push(val);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
