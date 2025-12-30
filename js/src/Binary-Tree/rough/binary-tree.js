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

        this.size++;
    }

    pop() {
        if (this.top == null) {
            return null;
        }

        let val = this.top.val;
        this.top = this.top.below;

        this.size--;

        return val;
    }

    print() {
        let res = [];

        if (this.top == null) {
            console.log([]);
            return [];
        }

        let curr = this.top;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.below;
        }

        console.log(res);
        return res;
    }
}

const stack = new Stack();

for (let i = 1; i <= 3; i++) {
    stack.push(i);
}

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
stack.print();
