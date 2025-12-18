import { ListNode, makeLinkedList, printList } from '../00-dsa/linkedList.js';

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

const linkedList = makeLinkedList([1, 2, 3, 4, 5]);
const result = removeNthFromEnd(linkedList.head, 2);
printList(result);
