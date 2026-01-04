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

    concat(l) {
        let curr = this.head;

        while (curr.next != null) {
            curr = curr.next;
        }

        curr.next = l.head;
    }

    print() {
        if (this.head == null) {
            return [];
        }

        let res = [];

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);
    }
}

const l1 = new LinkedList();

for (let i = 1; i <= 3; i++) {
    l1.append(i);
}
l1.print();

const l2 = new LinkedList();

for (let i = 4; i <= 6; i++) {
    l2.append(i);
}

l1.concat(l2);
l1.print();
