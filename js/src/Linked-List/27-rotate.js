class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    rotate() {
        let oldHead = this.head;
        this.head = this.head.next;

        this.tail.next = oldHead;
        oldHead.next = null;
        this.tail = oldHead;
    }

    print() {
        let arr = [];

        let temp = this.head;

        while (temp != null) {
            arr.push(temp.value);
            temp = temp.next;
        }

        console.log(arr);
        return arr;
    }
}

const linkedList = new LinkedList();

let nums;

nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.rotate();
linkedList.print();
