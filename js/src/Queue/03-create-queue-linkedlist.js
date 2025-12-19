class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this.tail.value;
    }

    dequeue() {
        if (this.head == null) {
            return null;
        }

        const value = this.head.value;
        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        this.length--;
        return value;
    }
}

const queue = new Queue();
queue.enqueue(12);
queue.dequeue();

queue.enqueue(24);
queue.enqueue(27);
queue.enqueue(30);
queue.enqueue(123);
console.log(queue.dequeue());
console.log(queue);
