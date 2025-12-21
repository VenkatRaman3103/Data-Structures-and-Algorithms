import { Queue } from './0-modules.js';

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

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

    inorder() {
        let res = [];

        let stack = [];
        let current = this.root;

        while (stack.length > 0 || current != null) {
            if (current != null) {
                stack.push(current);
                current = current.left;
            } else {
                current = stack.pop();
                res.push(current.value);
                current = current.right;
            }
        }

        return res;
    }
}

const binaryTree = new BinaryTree();

const nums = [1, 2, 3, 4, 5, null, 6];

const nodes = nums.map((n) => (n == null ? null : new Node(n)));

for (let i = 0; i < nums.length; i++) {
    let node = nodes[i];

    if (node != null) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;

        if (left < nums.length) {
            node.left = nodes[left];
        }

        if (right < nums.length) {
            node.right = nodes[right];
        }
    }
}

binaryTree.root = nodes[0];
console.log(nodes);
console.log(binaryTree.inorder());
