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

    insert(index, value) {
        let i = 0;

        let prev = this.head;

        while (prev != null && i < index - 1) {
            i++;
            prev = prev.next;
        }

        let newNode = new Node(value);

        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        return this.head;
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

const nums = [1, 3, 4, 5, 6];
const index = 1;
const value = 2;

for (let n of nums) {
    linkedList.append(n);
}

const result = linkedList.insert(index, value);
console.log(result);
console.log(linkedList.print());
