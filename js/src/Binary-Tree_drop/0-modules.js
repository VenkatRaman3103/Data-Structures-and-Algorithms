export function makeBinaryTree(arr) {
    let queue = [];
    let root = new Node(arr[0]);
    queue.push(root);

    let i = 1;

    while (queue.length > 0) {
        let node = queue.shift();

        if (i < arr.length && arr[i] != null) {
            let newNode = new Node(arr[i]);

            node.left = newNode;
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] != null) {
            let newNode = new Node(arr[i]);

            node.right = newNode;
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
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

        this.length++;
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

        this.length--;
        return value;
    }
}
