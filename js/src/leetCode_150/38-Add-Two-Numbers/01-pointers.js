import { ListNode, makeLinkedList, printList } from '../00-dsa/linkedList.js';

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);

    let current = dummy;
    let carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);

        current = current.next;

        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }

    return dummy.next;
};

const l1 = makeLinkedList([2, 4, 3]);
const l2 = makeLinkedList([5, 6, 4]);

const result = addTwoNumbers(l1.head, l2.head);
printList(result);
