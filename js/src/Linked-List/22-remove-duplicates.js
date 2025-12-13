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

    removeDuplicates() {
        let current = this.head;

        while (current != null && current.next != null) {
            if (current.value == current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    print() {
        let arr = [];

        let current = this.head;

        while (current != null) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
    }
}

const linkedList = new LinkedList();

const nums = [1, 1, 1, 2, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.removeDuplicates();
linkedList.print();
