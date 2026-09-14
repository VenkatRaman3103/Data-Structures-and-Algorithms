class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyH {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            let curr = this.head;

            while (curr.next != this.head) {
                curr = curr.next;
            }

            curr.next = newNode;
            newNode.prev = curr;
            newNode.next = this.head;
            this.head.prev = newNode;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            let last = this.head.prev;
            let oldHead = this.head;

            newNode.next = this.head;
            this.head = newNode;
            newNode.prev = last;
            last.next = newNode;
            oldHead.prev = newNode;
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
            let last = this.head.prev;
            let second = this.head.next;

            last.next = second;
            second.prev = last;
            this.head = second;
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
            let secondLast = this.head.prev.prev;
            secondLast.next = this.head;
            this.head.prev = secondLast;
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

const circulardoublyh = new CircularDoublyH();

for (let i = 1; i <= 10; i++) {
    circulardoublyh.append(i);
}

circulardoublyh.prepend(0);
circulardoublyh.removeFirst();
circulardoublyh.removeLast();
circulardoublyh.print();
