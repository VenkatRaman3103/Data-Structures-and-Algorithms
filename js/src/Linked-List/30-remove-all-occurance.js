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

    remove(target) {
        let node = new LinkedList();

        let current = this.head;

        while (current != null) {
            if (current.value != target) {
                node.append(current.value);
            }
            current = current.next;
        }

        node.print();
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

const nums = [1, 2, 3, 2, 4];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.remove(2);
linkedList.print();
