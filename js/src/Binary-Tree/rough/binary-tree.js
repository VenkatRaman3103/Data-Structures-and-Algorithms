class StackNode {
    constructor(val) {
        this.val = val;
        this.below = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);

        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.below = this.top;
            this.top = newNode;
        }

        this.size++;
    }

    pop() {
        if (this.top == null) {
            return null;
        }

        let val = this.top.val;
        this.top = this.top.below;

        this.size--;

        return val;
    }

    print() {
        let res = [];

        if (this.top == null) {
            console.log([]);
            return [];
        }

        let curr = this.top;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.below;
        }

        console.log(res);
        return res;
    }
}

// Queue
class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new QueueNode(val);

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

        let val = this.head.val;
        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        return val;
    }
}

// binary tree
class BinaryNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new BinaryNode(val);

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let q = new Queue();
        q.enqueue(this.root);

        while (q.length > 0) {
            let node = q.dequeue();

            if (node.left != null) {
                q.enqueue(node.left);
            } else {
                node.left = newNode;
                return;
            }

            if (node.right != null) {
                q.enqueue(node.right);
            } else {
                node.right = newNode;
                return;
            }
        }
    }

    make(arr) {
        let root = new BinaryNode(arr[0]);

        let q = new Queue();
        q.enqueue(root);

        let i = 1;

        while (q.length > 0 && i < arr.length) {
            let node = q.dequeue();

            if (i < arr.length && arr[i] != null) {
                let leftNode = new BinaryNode(arr[i]);
                node.left = leftNode;
                q.enqueue(node.left);
            }
            i++;

            if (i < arr.length && arr[i] != null) {
                let rightNode = new BinaryNode(arr[i]);
                node.right = rightNode;
                q.enqueue(node.right);
            }
            i++;
        }

        this.root = root;
    }
}

const binaryTree = new BinaryTree();
binaryTree.make([1, 2, 3, 4, 5, null, 6]);
