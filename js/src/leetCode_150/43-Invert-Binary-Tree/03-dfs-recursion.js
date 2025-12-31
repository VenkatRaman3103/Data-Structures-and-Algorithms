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
        newNode.below = this.top;
        this.top = newNode;

        this.size++;

        return this.top.val;
    }

    pop() {
        let node = this.top.val;

        this.top = this.top.below;

        this.size--;

        return node;
    }
}

class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class QueueStruct {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new QueueNode(val);

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

        this.length -= 1;
        return val;
    }

    print() {
        let res = [];

        let current = this.head;

        while (current != null) {
            res.push(current.val);
            current = current.next;
        }

        console.log(res);
        return res;
    }
}

class Node {
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
        let root = new Node(arr[0]);

        let q = new QueueStruct();
        q.enqueue(root);

        let i = 1;

        while (q.length > 0 && i < arr.length) {
            let node = q.dequeue();

            if (arr[i] != null && i < arr.length) {
                let leftNode = new Node(arr[i]);
                node.left = leftNode;
                q.enqueue(node.left);
            }
            i++;

            if (arr[i] != null && i < arr.length) {
                let rightNode = new Node(arr[i]);
                node.right = rightNode;
                q.enqueue(node.right);
            }
            i++;
        }

        this.root = root;
    }
}

var invertTree = function (root) {
    if (!root) {
        return null;
    }

    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);

    invertTree(root.right);

    return root;
};

const binaryTree = new BinaryTree();
const root = [1, 2, 3, 4, 5, 6];
binaryTree.make(root);

const result = invertTree(binaryTree.root);
console.log(result);
