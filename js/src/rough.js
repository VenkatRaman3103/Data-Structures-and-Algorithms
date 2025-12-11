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

    reverse_stack() {
        let stack = [];

        let curr = this.head;

        while (curr != null) {
            stack.push(curr.value);
            curr = curr.next;
        }

        this.head = null;

        while (stack.length > 0) {
            this.append(stack.pop());
        }
    }

    reverse_pointers() {
        let a = null;
        let b = this.head;

        while (b != null) {
            let c = b.next;

            b.next = a;
            a = b;
            b = c;
        }
        this.head = a;
    }

    revere_recusive() {
        function recursiveFunc(node) {
            if (node == null || node.next == null) {
                return node;
            }

            let newHead = recursiveFunc(node.next);

            node.next.next = node;
            node.next = null;

            return newHead;
        }

        this.head = recursiveFunc(this.head);
        console.log(this.head);
    }

    toAnArray() {
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

const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

// linkedList.reverse_stack();
// linkedList.reverse_pointers();
linkedList.revere_recusive();
console.log(linkedList.toAnArray());
