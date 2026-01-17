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

        this.length += 1;
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

        this.length -= 1;

        return val;
    }

    print() {
        if (this.head == null) {
            return [];
        }

        let res = [];

        let curr = this.head;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res);

        return res;
    }
}

class TreeNode {
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
        let newNode = new TreeNode(val);

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
        let root = new TreeNode(arr[0]);

        let q = new Queue();
        q.enqueue(root);

        let i = 1;

        while (q.length > 0) {
            let node = q.dequeue();

            if (arr[i] != null && i < arr.length) {
                node.left = new TreeNode(arr[i]);
                q.enqueue(node.left);
            }
            i += 1;

            if (arr[i] != null && i < arr.length) {
                node.right = new TreeNode(arr[i]);
                q.enqueue(node.right);
            }
            i += 1;
        }

        this.root = root;
    }

    preOrder() {
        //
    }

    inOrder() {
        //
    }

    postOrder() {
        //
    }
}

const b = new BinaryTree();

const nodes = [1, 2, 3, null, 5, null, 7];
b.make(nodes);

console.log(b.root);
