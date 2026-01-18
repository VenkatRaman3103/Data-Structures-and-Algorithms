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

        return [];
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
        if (this.root == null) {
            return null;
        }

        let res = [];

        let stack = new Stack();
        stack.push(this.root);

        while (stack.size > 0) {
            let node = stack.pop();

            res.push(node.val);

            if (node.right != null) {
                stack.push(node.right);
            }

            if (node.left != null) {
                stack.push(node.left);
            }
        }

        return res;
    }

    inOrder() {
        if (this.root == null) {
            return null;
        }

        let res = [];

        let stack = new Stack();

        let curr = this.root;

        while (stack.size > 0 || curr != null) {
            if (curr != null) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                res.push(curr.val);
                curr = curr.right;
            }
        }

        return res;
    }

    postOrder() {
        if (this.root == null) {
            return null;
        }

        let res = [];

        let stack = new Stack();
        stack.push(this.root);

        while (stack.size > 0) {
            let node = stack.pop();

            res.unshift(node.val);

            if (node.left != null) {
                stack.push(node.left);
            }

            if (node.right != null) {
                stack.push(node.right);
            }
        }

        return res;
    }

    levelOrder() {
        if (this.root == null) {
            return null;
        }

        let res = [];

        let q = new Queue();
        q.enqueue(this.root);

        while (q.length > 0) {
            let node = q.dequeue();

            res.push(node.val);

            if (node.left != null) {
                q.enqueue(node.left);
            }

            if (node.right != null) {
                q.enqueue(node.right);
            }
        }

        return res;
    }
}

const b = new BinaryTree();

const nodes = [1, 2, 3, 4, 5, 6, 7];
b.make(nodes);

console.log(b.root);

const preOrder = b.preOrder();
console.log(preOrder);

const inOrder = b.inOrder();
console.log(inOrder);

const postOrder = b.postOrder();
console.log(postOrder);

const levelOrder = b.levelOrder();
console.log(levelOrder);
