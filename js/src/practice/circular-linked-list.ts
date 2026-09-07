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
        console.log(newNode);
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
        //
    }
}

const LinkedList = new CircularLinkedList();

LinkedList.append(1);
LinkedList.append(2);
LinkedList.append(3);
LinkedList.append(4);
LinkedList.append(5);
LinkedList.print();
