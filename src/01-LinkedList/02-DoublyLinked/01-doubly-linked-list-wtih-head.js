class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = curr;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length += 1;
    }

    removeFrist() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == null) {
            this.head = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length -= 1;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == null) {
            this.head = null;
        } else {
            let curr = this.head;

            while (curr.next != null) {
                curr = curr.next;
            }

            curr.prev.next = null;
            curr.prev = null;
        }

        this.length -= 1;
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

const doublylinkedlist = new DoublyLinkedList();

for (let i = 1; i <= 10; i++) {
    doublylinkedlist.append(i);
}

doublylinkedlist.prepend(0);
doublylinkedlist.removeFrist();
doublylinkedlist.print();
