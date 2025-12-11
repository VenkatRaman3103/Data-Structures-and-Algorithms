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

    sumOfNode() {
        let sum = 0;

        let current = this.head;

        while (current != null) {
            sum += current.value;
            current = current.next;
        }
        console.log(sum);
    }
}

const linkedList = new LinkedList();

const nums = [2, 4, 6];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.sumOfNode();
