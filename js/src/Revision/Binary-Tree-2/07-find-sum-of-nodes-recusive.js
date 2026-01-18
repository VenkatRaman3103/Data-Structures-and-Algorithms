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

    make(arr) {
        let root = new TreeNode(arr[0]);

        let q = new Queue();
        q.enqueue(root);

        let i = 1;

        while (q.length > 0) {
            let node = q.dequeue();

            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                q.enqueue(node.left);
            }
            i++;

            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                q.enqueue(node.right);
            }
            i++;
        }

        this.root = root;
    }

    sumOfNodes(root = this.root) {
        if (root == null) {
            return 0;
        }

        return (
            root.val +
            (this.sumOfNodes(root.left) + this.sumOfNodes(root.right))
        );
    }
}

const b = new BinaryTree();

const nodes = [1, 2, 3, 4, 5, 6];

b.make(nodes);

const result = b.sumOfNodes();
console.log(result);
