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

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    let stack = [[root, 1]];
    let res = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();

        res = Math.max(res, depth);

        if (node.left != null) {
            stack.push([node.left, depth + 1]);
        }

        if (node.right != null) {
            stack.push([node.right, depth + 1]);
        }
    }

    return res;
};

const binaryTree = new BinaryTree();
const root = [3, 9, 20, null, null, 15, 7];
binaryTree.make(root);

const result = maxDepth(binaryTree.root);
console.log(result);
