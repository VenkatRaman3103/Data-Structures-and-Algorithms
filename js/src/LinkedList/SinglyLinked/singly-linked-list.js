import { loadESLint } from 'eslint';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let curr = this.head;

            while (curr.next != null) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length += 1;
    }

    prepend(val) {
        //
    }

    removeFirst() {
        //
    }

    removeLast() {
        //
    }

    print() {
        if (this.head == null) {
            return null;
        }

        let curr = this.head;

        while (curr != null) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

const linkedlist = new LinkedList();

for (let i = 1; i <= 10; i++) {
    linkedlist.append(i);
}

linkedlist.print();
