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

    levelOrder() {
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

        console.log(res);
        return res;
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

        console.log(root);
    }
}

const binaryTree = new BinaryTree();
binaryTree.make([1, 2, 3, 4, 5, null, 6]);
binaryTree.levelOrder();
