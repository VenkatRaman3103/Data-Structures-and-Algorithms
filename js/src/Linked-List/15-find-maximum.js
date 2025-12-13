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

    findMaximum() {
        let max = 0;

        let current = this.head;

        while (current != null) {
            max = Math.max(max, current.value);

            current = current.next;
        }
        console.log(max);
        return max;
    }

    print() {
        let arr = [];

        let curr = this.head;

        while (curr != null) {
            arr.push(curr.value);
            curr = curr.next;
        }

        console.log(arr);
        return arr;
    }
}

const linkedList = new LinkedList();

const nums = [5, 1, 8, 3];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.print();
linkedList.findMaximum();
