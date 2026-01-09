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

    remove(val) {
        let dummy = new ListNode(0);
        let curr = dummy;

        let node = this.head;

        while (node != null) {
            if (node.val != val) {
                let newNode = new ListNode(node.val);
                curr.next = newNode;
                curr = curr.next;
            }
            node = node.next;
        }

        this.head = dummy.next;
        return dummy.next;
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
linkedList.append(5);
linkedList.append(5);
linkedList.append(5);

linkedList.remove(1);
linkedList.print();
