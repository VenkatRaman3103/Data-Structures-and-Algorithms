import { makeLinkedList, printList } from '../00-dsa/linkedList.js';

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            return true;
        }
    }

    return false;
};

const linkedList = makeLinkedList([3, 2, 0, -4]);

const result = hasCycle(linkedList.head);
console.log(result);
