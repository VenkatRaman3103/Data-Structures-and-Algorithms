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
        function recursiveReverse(node) {
            if (node == null || node.next == null) {
                return node;
            }

            let newNode = recursiveReverse(node.next);

            node.next.next = node;
            node.next = null;

            return newNode;
        }

        this.head = recursiveReverse(this.head);
    }

    toArray() {
        let arr = [];

        let curr = this.head;

        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr);
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.reverse();
linkedList.toArray();
