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

    levelTraversal() {
        let res = [];

        let queue = new Queue();
        queue.enqueue(this.root);

        while (queue.length > 0) {
            let node = queue.dequeue();
            res.push(node.value);

            if (node.left != null) {
                queue.enqueue(node.left);
            }

            if (node.right != null) {
                queue.enqueue(node.right);
            }
        }
        console.log(res);
        return res;
    }
}

const binaryTree = new BinaryTree();

const nums = [1, 2, 3, 4, 5, null, 6];
const nodes = nums.map((n) => (n == null ? null : new Node(n)));

for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];

    if (node != null) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;

        if (left < nodes.length) {
            node.left = nodes[left];
        }
        if (right < nodes.length) {
            node.right = nodes[right];
        }
    }
}

binaryTree.root = nodes[0];
binaryTree.levelTraversal();
