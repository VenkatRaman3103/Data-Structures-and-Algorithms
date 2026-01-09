class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(val) {
        let newNode = new ListNode(val);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let curr = this.head;

            while (curr.next != null) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length += 1;
    }

    prepend(val) {
        let newNode = new ListNode(val);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
    }

    swap() {
        let prev = null;
        let curr = this.head;

        while (curr.next != null) {
            prev = curr;
            curr = curr.next;
        }

        let last = curr;
        let temp = this.head.next;
        this.head.next = null;
        let first = this.head;

        prev.next = first;
        last.next = temp;
        this.head = last;
    }

    print() {
        let res = [];

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);
        return res;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

linkedList.swap();
linkedList.print();
