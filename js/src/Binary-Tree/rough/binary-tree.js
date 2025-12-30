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

// Queue
class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.legth = 0;
    }

    enqueue(val) {
        let newNode = new QueueNode(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.legth++;
    }

    dequeue() {
        if (this.head == null) {
            return null;
        }

        let val = this.head.val;
        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        return val;
    }
}

const q = new Queue();

for (let i = 1; i <= 3; i++) {
    q.enqueue(i);
}

console.log(q.head);
