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
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    insertAtTail(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;

            if (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }
}

const linkedList = new LinkedList();

const nums = [1, 2];
const value = 3;

for (let n of nums) {
    linkedList.append(n);
}

linkedList.insertAtTail(value);
console.log(linkedList.head);
