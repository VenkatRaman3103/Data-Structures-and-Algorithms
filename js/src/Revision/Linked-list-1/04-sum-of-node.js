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
    }

    sum() {
        if (this.head == null) {
            return 0;
        }

        let acc = 0;

        let curr = this.head;

        while (curr != null) {
            acc += curr.val;

            curr = curr.next;
        }

        return acc;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

console.log(linkedList.sum());
