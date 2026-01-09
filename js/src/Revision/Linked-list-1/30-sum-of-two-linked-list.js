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

    sum(list) {
        let dummy = new ListNode(0);
        let curr = dummy;

        let l1 = this.head;
        let l2 = list;

        while (l1 != null && l2 != null) {
            let newNode = new ListNode(l1.val + l2.val);
            curr.next = newNode;
            curr = curr.next;

            l1 = l1.next;
            l2 = l2.next;
        }

        return dummy.next;
    }

    print(head) {
        let res = [];

        let curr = head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);
        return res;
    }
}

const l1 = new LinkedList();

for (let i = 1; i <= 5; i++) {
    l1.append(i);
}

const l2 = new LinkedList();

for (let i = 1; i <= 5; i++) {
    l2.append(i);
}

// l1.sum(l2.head);
let sumList = l1.sum(l2.head);
l1.print(sumList);
