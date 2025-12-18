export class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

export class LinkedList {
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

export function printList(node) {
    const arr = [];

    let current = node;

    while (current != null) {
        arr.push(current.val);
        current = current.next;
    }

    console.log(arr);
    return arr;
}

export function makeLinkedList(nums) {
    const list = new LinkedList();

    for (let n of nums) {
        list.append(n);
    }

    return list;
}
