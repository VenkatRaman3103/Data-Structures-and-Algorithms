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

    getMaximum() {
        if (this.head == null) {
            return null;
        }

        let maxi = -Infinity;

        let curr = this.head;

        while (curr != null) {
            maxi = Math.max(maxi, curr.val);
            curr = curr.next;
        }

        return maxi;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

linkedList.print();
console.log(linkedList.getMaximum());
