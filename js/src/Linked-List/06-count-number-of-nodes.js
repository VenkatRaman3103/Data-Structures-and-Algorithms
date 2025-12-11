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

        this.length++;
    }

    countNode() {
        let count = 0;

        let current = this.head;

        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

let linkedList = new LinkedList();

const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}
console.log(linkedList.head);
console.log(linkedList.countNode());
