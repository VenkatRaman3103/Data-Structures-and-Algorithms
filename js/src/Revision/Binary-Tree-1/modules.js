export class QueueNode {
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
        let newNode = new QueueNode(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
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

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);
        return res;
    }
}

// const q = new Queue();
//
// for (let i = 1; i <= 5; i++) {
//     q.enqueue(i);
// }
//
// console.log(q.dequeue());
// q.print();
