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
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
    }

    removeFrist() {
        if (this.head == null) {
            return null;
        }

        this.head = this.head.next;

        this.length -= 1;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        let prev = null;
        let curr = this.head;

        while (curr.next != null) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;

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

const linkedlist = new LinkedList();
let size = 10;

for (let i = 1; i <= size / 2; i++) {
    linkedlist.append(i);
}

for (let i = size / 2; i > 0; i--) {
    linkedlist.prepend(i);
}

linkedlist.removeFrist();
linkedlist.removeLast();

linkedlist.print();
