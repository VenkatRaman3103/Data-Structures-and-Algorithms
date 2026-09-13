class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedListHL {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    append(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
    }

    removeFirst() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length -= 1;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = null;
            let curr = this.head;

            while (curr.next != null) {
                prev = curr;
                curr = curr.next;
            }

            prev.next = null;
            this.tail = prev;
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

const linkedlisthl = new LinkedListHL();

for (let i = 1; i <= 10; i++) {
    linkedlisthl.append(i);
}

linkedlisthl.prepend(0);
linkedlisthl.removeFirst();
linkedlisthl.removeLast();

linkedlisthl.print();
