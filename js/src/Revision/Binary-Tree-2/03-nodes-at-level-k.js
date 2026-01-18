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

            if (node.left == null) {
                node.left = newNode;
                return;
            } else {
                q.enqueue(node.left);
            }

            if (node.right == null) {
                node.right = newNode;
                return;
            } else {
                q.enqueue(node.right);
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

    levelK(k) {
        if (this.root == null) {
            return null;
        }

        let q = new Queue();
        q.enqueue(this.root);

        while (q.length > 0) {
            let qLenght = q.length;

            let level = [];

            for (let i = 0; i < qLenght; i++) {
                let node = q.dequeue();

                level.push(node.val);

                if (node.left != null) {
                    q.enqueue(node.left);
                }

                if (node.right != null) {
                    q.enqueue(node.right);
                }
            }

            if (k == 0) {
                return level;
            }

            k -= 1;
        }
    }
}

const b = new BinaryTree();

const nodes = [1, 2, 3, null, 5, 6, 7, 8];
b.make(nodes);

const result = b.levelK(2);
console.log(result);
