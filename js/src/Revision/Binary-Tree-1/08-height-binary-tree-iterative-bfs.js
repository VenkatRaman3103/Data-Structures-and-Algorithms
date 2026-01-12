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

    getHeight() {
        if (this.root == null) {
            return 0;
        }

        let q = new Queue();
        q.enqueue(this.root);

        let height = 0;

        while (q.lenght > 0) {
            let qLenght = q.lenght;

            for (let i = 0; i < qLenght; i++) {
                let node = q.dequeue();

                if (node.left != null) {
                    q.enqueue(node.left);
                }

                if (node.right != null) {
                    q.enqueue(node.right);
                }
            }

            height += 1;
        }

        return height;
    }
}

const b = new BinaryTree();

for (let i = 1; i <= 9; i++) {
    b.insert(i);
}

const result = b.getHeight();
console.log(result);
