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
        //
    }

    prepend(val) {
        //
    }

    removeFrist() {
        //
    }

    removeLast() {
        //
    }

    print() {
        //
    }
}

const doublylinkedlist = new DoublyLinkedList();

for (let i = 1; i <= 10; i++) {
    doublylinkedlist.append(i);
}
