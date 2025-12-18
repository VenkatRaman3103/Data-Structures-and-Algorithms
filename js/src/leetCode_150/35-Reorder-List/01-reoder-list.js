import { makeLinkedList, printList } from '../00-dsa/linkedList.js';

var reorderList = function (head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let current = slow.next;
    slow.next = null;

    while (current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    let first = head;
    let second = prev;

    while (second != null) {
        let t1 = first.next;
        let t2 = second.next;

        first.next = second;
        second.next = t1;

        first = t1;
        second = t2;
    }

    return head;
};

const list = makeLinkedList([1, 2, 3, 4, 5]);

const result = reorderList(list.head);
printList(result);
