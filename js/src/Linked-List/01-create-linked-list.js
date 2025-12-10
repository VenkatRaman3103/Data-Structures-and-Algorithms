class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let tail = this.getTail();
            tail.next = newNode;
        }

        this.length++;
    }

    // utils
    getTail() {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

console.log(linkedList.head);
