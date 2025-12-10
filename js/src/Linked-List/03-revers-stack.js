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
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    reverse() {
        let stack = [];

        let current = this.head;

        while (current != null) {
            stack.push(current.value);
            current = current.next;
        }

        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 4, 5, 6, 123, 12];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.reverse();
