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

    merge(head) {
        let dummy = new ListNode(0);
        let curr = dummy;

        let a = this.head;
        let b = head;

        while (a.next != null || b.next != null) {
            if (a.val < b.val) {
                curr.next = new ListNode(a.val);
                a = a.next;
            } else if (b.val < a.val) {
                curr.next = new ListNode(b.val);
                b = b.next;
            }

            curr = curr.next;
        }
        this.head = dummy.next;
    }
}

const l1 = new LinkedList();

l1.append(1);
l1.append(3);
l1.append(5);
l1.append(7);

const l2 = new LinkedList();

l2.append(2);
l2.append(4);
l2.append(6);
l2.append(8);

l1.merge(l2.head);
l1.print(l1.head);
