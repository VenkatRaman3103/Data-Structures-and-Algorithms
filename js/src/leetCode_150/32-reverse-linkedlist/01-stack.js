import { makeLinkedList, LinkedList, ListNode } from '../00-dsa/linkedList.js';

const linkedList = makeLinkedList([1, 2, 3, 4, 5]);

export function reverseList(head) {
    let stack = [];

    let current = head;

    while (current != null) {
        stack.push(current.val);

        current = current.next;
    }

    let dummy = new ListNode(0);

    current = dummy;

    while (stack.length > 0) {
        current.next = new ListNode(stack.pop());
        current = current.next;
    }

    return dummy.next;
}

const result = reverseList(linkedList.head);
console.log(result);
