class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            newNode.next = newNode;
        } else {
            let curr = this.head;

            while (curr.next != this.head) {
                curr = curr.next;
            }

            curr.next = newNode;
            newNode.next = this.head;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            newNode.next = newNode;
        } else {
            let curr = this.head;

            while (curr.next != this.head) {
                curr = curr.next;
            }

            newNode.next = this.head;
            curr.next = newNode;
            this.head = newNode;
        }

        this.length += 1;
    }

    removeFirst() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == this.head) {
            this.head = null;
        } else {
            let curr = this.head;

            while (curr.next != this.head) {
                curr = curr.next;
            }

            let second_first = this.head.next;

            this.head = second_first;
            curr.next = second_first;
        }

        this.length -= 1;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == this.head) {
            this.head = null;
        } else {
            let prev = null;
            let curr = this.head;

            while (curr.next != this.head) {
                prev = curr;
                curr = curr.next;
            }

            prev.next = this.head;
        }

        this.length -= 1;
    }

    print() {
        if (this.head == null) {
            return null;
        }

        let curr = this.head;

        do {
            console.log(curr.val);
            curr = curr.next;
        } while (curr != this.head);
    }
}

const circularsinglylinkedlist = new CircularSinglyLinkedList();

for (let i = 1; i <= 10; i++) {
    circularsinglylinkedlist.append(i);
}

circularsinglylinkedlist.prepend(0);
circularsinglylinkedlist.removeFirst();
circularsinglylinkedlist.removeLast();
circularsinglylinkedlist.print();
