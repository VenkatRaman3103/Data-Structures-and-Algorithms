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

        this.lenght = 0;
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

        this.lenght += 1;
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

        this.lenght -= 1;

        return val;
    }

    print() {
        if (this.head == null) {
            console.log([]);
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

        this.size += 1;
    }

    pop() {
        if (this.top == null) {
            return null;
        }

        let val = this.top.val;

        this.top = this.top.below;

        this.size -= 1;

        return val;
    }

    print() {
        if (this.top == null) {
            console.log([]);
            return [];
        }

        let res = [];

        let curr = this.top;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.below;
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

        while (q.lenght > 0) {
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

        while (q.lenght > 0) {
            let node = q.dequeue();

            if (arr[i] != null && i < arr.length) {
                node.left = new TreeNode(arr[i]);
                q.enqueue(node.left);
            }
            i++;

            if (arr[i] != null && i < arr.length) {
                node.right = new TreeNode(arr[i]);
                q.enqueue(node.right);
            }
            i++;
        }

        this.root = root;
    }

    mirror() {
        if (this.root == null) {
            return null;
        }

        let q = new Queue();
        q.enqueue(this.root);

        while (q.lenght > 0) {
            let node = q.dequeue();

            [node.left, node.right] = [node.right, node.left];

            if (node.left != null) {
                q.enqueue(node.left);
            }

            if (node.right != null) {
                q.enqueue(node.right);
            }
        }
    }
}

const b = new BinaryTree();

const nodes = [1, 2, 3, 4, null, 6];
b.make(nodes);
b.mirror();
