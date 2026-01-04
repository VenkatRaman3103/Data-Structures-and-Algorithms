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

    campare(l) {
        let same = true;

        let a = this.head;
        let b = l.head;

        while (a != null && b != null) {
            if (a.val != b.val) {
                same = false;
            }
            a = a.next;
            b = b.next;
        }

        if (a || b) {
            return false;
        }

        return same;
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

for (let i = 1; i <= 3; i++) {
    l2.append(i);
}

// l2.append(12);

console.log(l1.campare(l2));
