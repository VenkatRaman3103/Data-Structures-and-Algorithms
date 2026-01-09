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
            newNode.prev = curr;
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

    isPalindrome() {
        let curr = this.head;

        while (curr.next != null) {
            curr = curr.next;
        }

        let l = this.head;
        let r = curr;

        while (l != r && l.prev != r) {
            if (l.val != r.val) {
                return false;
            }

            l = l.next;
            r = r.prev;
        }

        return true;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= 5; i++) {
    linkedList.append(i);
}

for (let i = 5; i > 0; i--) {
    linkedList.append(i);
}

linkedList.print();
console.log(linkedList.isPalindrome());
