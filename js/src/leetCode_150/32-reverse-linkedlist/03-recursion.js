class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        let newNode = new ListNode(value);

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

    print() {
        let arr = [];

        let current = this.head;

        while (current != null) {
            arr.push(current.val);

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

export function reverseList(head) {
    function recursiveFn(node) {
        if (node == null || node.next == null) {
            return node;
        }

        const newHead = recursiveFn(node.next);

        node.next.next = node;
        node.next = null;

        return newHead;
    }

    head = recursiveFn(head);

    return head;
}

const result = reverseList(linkedList.head);
console.log(result);
