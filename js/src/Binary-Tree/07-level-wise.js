import { Queue } from './0-module.js';

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

        let q = new Queue();
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

var levelOrder = function (root) {
    if (root == null) {
        return [];
    }

    let res = [];

    let q = new Queue();
    q.enqueue(root);

    while (q.length > 0) {
        let qLength = q.length;
        let level = [];

        for (let i = 0; i < qLength; i++) {
            let node = q.dequeue();

            level.push(node.val);

            if (node.left != null) {
                q.enqueue(node.left);
            }

            if (node.right != null) {
                q.enqueue(node.right);
            }
        }
        res.push(level);
    }

    return res;
};

const binaryTree = new BinaryTree();
const root = [3, 9, 20, 12, null, 15, 7];
binaryTree.make(root);

const result = levelOrder(binaryTree.root);
console.log(result);
