class ListNode {
    constructor(val) {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
            newNode.prev = curr;
        }
    }

    print(head) {
        let res = [];

        let curr = head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);
    }

    leftToRight() {
        let res = [];

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);
    }

    rightToLeft() {
        let res = [];

        let curr = this.head;

        while (curr.next != null) {
            curr = curr.next;
        }

        let last = curr;

        while (last != null) {
            res.push(last.val);
            last = last.prev;
        }

        console.log(res);
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

linkedList.leftToRight();
linkedList.rightToLeft();
