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
        return res;
    }

    getMinimum() {
        if (this.head == null) {
            return null;
        }

        let minimum = Infinity;

        let curr = this.head;

        while (curr != null) {
            minimum = Math.min(minimum, curr.val);
            curr = curr.next;
        }

        return minimum;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

linkedList.print();
console.log(linkedList.getMinimum());
