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

    conscate(nodes) {
        let current = this.head;

        while (current.next != null) {
            current = current.next;
        }

        current.next = nodes.head;
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

const nums_1 = [1, 2, 3, 4, 5, 6];

for (let n of nums_1) {
    linkedList.append(n);
}

const nodes = new LinkedList();

const nums_2 = [7, 8, 9, 10];

for (let n of nums_2) {
    nodes.append(n);
}

console.log(nodes);

linkedList.conscate(nodes);
linkedList.print();
