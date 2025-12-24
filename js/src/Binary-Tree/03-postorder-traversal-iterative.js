import { Queue } from './0-module.js';

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let q = new Queue();
        q.enqueue(this.root);

        while (q.length > 0) {
            let node = q.dequeue();

            if (node.left == null) {
                let leftNode = new Node(val);
                node.left = leftNode;
                break;
            } else {
                q.enqueue(node.left);
            }

            if (node.right == null) {
                let rightNode = new Node(val);
                node.right = rightNode;
                break;
            } else {
                q.enqueue(node.right);
            }
        }
    }

    make(arr) {
        let root = new Node(arr[0]);

        let q = new Queue();
        q.enqueue(root);

        let i = 1;

        while (q.length > 0) {
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

const binaryTree = new BinaryTree();
// binaryTree.make([1, 2, 3, 4, 5, null, 6]);
console.log(binaryTree.root);
