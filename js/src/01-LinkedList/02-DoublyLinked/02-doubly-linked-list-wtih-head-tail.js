class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedListHL {
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
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new Node(val);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
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
            let second_first = this.head.next;
            second_first.prev = null;
            this.head = second_first;
        }

        this.length -= 1;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            let second_last = this.tail.prev;
            second_last.next = null;
            this.tail = second_last;
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

const doublylinkedlistHL = new DoublyLinkedListHL();

for (let i = 1; i <= 10; i++) {
    doublylinkedlistHL.append(i);
}

doublylinkedlistHL.prepend(0);
doublylinkedlistHL.removeFirst();
doublylinkedlistHL.removeLast();
doublylinkedlistHL.print();
