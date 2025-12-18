class _Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

var copyRandomList = function (head) {
    let hashTable = new Map();
    let current = head;

    while (current != null) {
        hashTable.set(current, new _Node(current.val));
        current = current.next;
    }

    current = head;

    while (current != null) {
        let clone = hashTable.get(current);

        clone.next = current.next ? hashTable.get(current.next) : null;
        clone.random = current.random ? hashTable.get(current.random) : null;

        current = current.next;
    }

    return hashTable.get(head);
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}

const n1 = new Node(7);
const n2 = new Node(13);
const n3 = new Node(11);

n1.next = n2;
n2.next = n3;

n1.random = null;
n2.random = n1;
n3.random = n2;

const head = n1;
const result = copyRandomList(head);
console.log(result);
