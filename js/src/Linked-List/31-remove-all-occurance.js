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
        let current = this.head;

        while (current != null) {
            if (current.next) {
                if (current.next.value == target) {
                    current.next = current.next.next;
                }
            }

            current = current.next;
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
        return arr;
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 2, 4];

for (let n of nums) {
    linkedList.append(n);
}

linkedList.remove(4);
linkedList.print();
