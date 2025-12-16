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

    rotate() {
        let oldHead = this.head;
        let tail = this.head;

        while (tail.next != null) {
            tail = tail.next;
        }

        this.head = this.head.next;
        oldHead.next = null;
        tail.next = oldHead;
    }

    print() {
        let arr = [];

        let current = this.head;

        while (current != null) {
            arr.push(current.value);

            current = current.next;
        }

        console.log(arr);
        return arr;
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.rotate();
linkedList.rotate();
linkedList.rotate();
linkedList.print();
