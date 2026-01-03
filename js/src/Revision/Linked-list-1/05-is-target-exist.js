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

    isExist(target) {
        if (this.head == null) {
            return false;
        }

        let curr = this.head;

        while (curr != null) {
            if (curr.val == target) {
                return true;
            }

            curr = curr.next;
        }

        return false;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

// console.log(linkedList.head);
console.log(linkedList.isExist(5));
