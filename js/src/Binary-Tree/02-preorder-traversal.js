import { Stack } from './0-module.js';

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

    preOrder() {
        if (this.root == null) {
            return null;
        }

        let stack = new Stack();
    }

    make(arr) {
        let root = new Node(arr[0]);

        let q = [];
        q.push(root);

        let i = 1;

        while (q.length > 0) {
            let node = q.shift();

            if (arr[i] != null && i < arr.length) {
                let leftNode = new Node(arr[i]);
                node.left = leftNode;
                q.push(node.left);
            }
            i++;

            if (arr[i] != null && i < arr.length) {
                let rightNode = new Node(arr[i]);
                node.right = rightNode;
                q.push(node.right);
            }
            i++;
        }

        this.root = root;
    }
}

const binaryTree = new BinaryTree();
const nums = [1, 2, 3, 4, 5, null, 6];
binaryTree.make(nums);

console.log(binaryTree.root);
