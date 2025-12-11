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

    insertAtHead(value) {
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }
}

const linkedList = new LinkedList();

const nums = [2, 3, 4];
const value = 1;

for (let n of nums) {
    linkedList.append(n);
}

linkedList.insertAtHead(value);
console.log(linkedList.head);
