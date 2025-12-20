// QUEUE
class ListNode {
    constructor(value) {
        this.value = value;
        this.next;
    }
}

export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new ListNode(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    dequeue() {
        if (this.head == null) {
            return null;
        }

        let value = this.head.value;

        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        this.length -= 1;
        return value;
    }
}

// BINARY TREE
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function makeBinaryTree(arr) {
    let queue = [];

    let root = new TreeNode(arr[0]);
    queue.push(root);

    let i = 1;

    while (i < arr.length) {
        let node = queue.shift();

        if (arr[i] != null) {
            let newNode = new TreeNode(arr[i]);
            node.left = newNode;
            queue.push(node.left);
        }

        i++;

        if (arr[i] != null) {
            let newNode = new TreeNode(arr[i]);
            node.right = newNode;
            queue.push(node.right);
        }

        i++;
    }

    return root;
}
