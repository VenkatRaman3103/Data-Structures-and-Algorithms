class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.length) return -1;

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr ? curr.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new ListNode(val);

        newNode.next = this.head;
        this.head = newNode;

        this.length += 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
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

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return;

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        let newNode = new ListNode(val);

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;

        this.length += 1;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.length--;
    }

    // test
    print() {
        let res = [];

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }
        console.log(res);
    }
}

var obj = new MyLinkedList();
console.log(obj.head);
obj.addAtHead(5);
obj.addAtHead(4);
obj.addAtHead(3);
obj.addAtHead(2);
obj.addAtHead(1);
obj.addAtTail(6);
obj.addAtTail(7);
obj.addAtTail(8);
obj.addAtIndex(3, 12);
obj.deleteAtIndex(3);
obj.print();
console.log(obj.get(3));
