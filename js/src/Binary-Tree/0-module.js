class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new QueueNode(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
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

        this.length -= 1;
        return val;
    }

    print() {
        let res = [];

        let current = this.head;

        while (current != null) {
            res.push(current.val);
            current = current.next;
        }

        console.log(res);
        return res;
    }
}

// --- stack --- //
class StackNode {
    constructor(val) {
        this.val = val;
        this.below = null;
    }
}

export class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);
        newNode.below = this.top;
        this.top = newNode;

        this.size++;

        return this.top.val;
    }

    pop() {
        let node = this.top.val;

        this.top = this.top.below;

        this.size--;

        return node;
    }
}
