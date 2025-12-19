class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    enqueue(value) {
        let newNode = new ListNode(value);

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

        let value = this.head.value;

        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        this.length--;
        return value;
    }
}
