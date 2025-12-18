import { ListNode, makeLinkedList, printList } from '../00-dsa/linkedList.js';

const list1 = makeLinkedList([1, 2, 4]);
const list2 = makeLinkedList([1, 3, 4]);

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);

    let current = dummy;

    let l1 = list1;
    let l2 = list2;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    if (l1 != null) {
        current.next = l1;
    }
    if (l2 != null) {
        current.next = l2;
    }

    return dummy.next;
};

const result = mergeTwoLists(list1.head, list2.head);
printList(result);
