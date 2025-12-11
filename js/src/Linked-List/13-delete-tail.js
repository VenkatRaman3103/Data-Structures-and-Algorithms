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

    deleteTail() {
        let prev = this.head;

        while (prev.next.next != null) {
            prev = prev.next;
        }
        prev.next = null;
    }

    print() {
        let arr = [];

        let curr = this.head;

        while (curr != null) {
            arr.push(curr.value);
            curr = curr.next;
        }

        return arr;
    }
}

const linkedList = new LinkedList();

const nums = [10, 20, 30];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.deleteTail();
const list = linkedList.print();
console.log(list);
