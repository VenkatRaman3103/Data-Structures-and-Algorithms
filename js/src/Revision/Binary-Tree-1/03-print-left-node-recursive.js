import { Queue } from './modules.js';

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

    printLeaf(root = this.root) {
        if (root == null) {
            return;
        }

        if (root.left == null && root.right == null) {
            console.log(root.val);
        }

        this.printLeaf(root.left);
        this.printLeaf(root.right);
    }
}

const b = new BinaryTree();

for (let i = 1; i <= 5; i++) {
    b.insert(i);
}

console.log(b.root);
b.printLeaf();
