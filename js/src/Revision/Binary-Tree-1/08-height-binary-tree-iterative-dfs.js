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

        let curr = this.top;

        while (curr != null) {
            res.push(curr.val);
            curr = curr.below;
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

    getHeight() {
        if (this.root == null) {
            return 0;
        }

        let s = new Stack();
        s.push([this.root, 1]);

        let h = 1;

        while (s.size > 0) {
            let [node, height] = s.pop();

            h = height;

            if (node.left != null) {
                s.push([node.left, height + 1]);
            }

            if (node.right != null) {
                s.push([node.right, height + 1]);
            }
        }

        return h;
    }

    print() {
        if (this.root == null) {
            return null;
        }

        let res = [];

        let s = new Stack();
        s.push(this.root);

        while (s.size > 0) {
            let node = s.pop();

            res.push(node.val);

            if (node.left != null) {
                s.push(node.left);
            }

            if (node.right != null) {
                s.push(node.right);
            }
        }

        console.log(res);
        return res;
    }
}

const b = new BinaryTree();

for (let i = 1; i <= 6; i++) {
    b.insert(i);
}

console.log(b.root);
b.print();

const result = b.getHeight();
console.log(result);
