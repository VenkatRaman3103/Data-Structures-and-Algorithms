class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class CircularSinglyHT {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    append(val) {
        let newNode = new Node(val);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;

            this.tail = newNode;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new Node(val);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;

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
            this.tail = null;
        } else {
            this.tail.next = this.head.next;
            this.head = this.head.next;
        }

        this.length -= 1;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == this.head) {
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;

            while (curr.next != this.tail) {
                curr = curr.next;
            }

            curr.next = this.head;
            this.tail = curr;
        }

        this.length -= 1;
    }

    print() {
        if (this.head == null && this.tail == null) {
            return null;
        }

        let curr = this.head;

        do {
            console.log(curr.val);
            curr = curr.next;
        } while (curr != this.head);
    }
}

const circularsinglyht = new CircularSinglyHT();

for (let i = 1; i <= 10; i++) {
    circularsinglyht.append(i);
}

circularsinglyht.prepend(0);
circularsinglyht.removeFirst();
circularsinglyht.removeFirst();
circularsinglyht.removeLast();
circularsinglyht.print();
