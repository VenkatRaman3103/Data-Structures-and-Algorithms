import { Queue } from './0-modules.js';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let queue = new Queue();
        queue.enqueue(this.root);

        while (queue.length > 0) {
            let node = queue.dequeue();

            if (node.left == null) {
                node.left = newNode;
                break;
            } else {
                queue.enqueue(node.left);
            }

            if (node.right == null) {
                node.right = newNode;
                break;
            } else {
                queue.enqueue(node.right);
            }
        }
    }
}

const binaryTree = new BinaryTree();

const nums = [1, 2, 3, 4, 5, null, 6];

for (let n of nums) {
    if (n != null) {
        binaryTree.insert(n);
    }
}

binaryTree.preOrder();
