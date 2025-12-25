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

    preOder() {
        function fn(node, res = []) {
            if (node == null) {
                return;
            }

            res.push(node.val);
            fn(node.left, res);
            fn(node.right, res);

            return res;
        }
        console.log(fn(this.root, []));
    }

    postOrder() {
        function fn(node, res = []) {
            if (node == null) {
                return;
            }

            fn(node.left, res);
            fn(node.right, res);
            res.push(node.val);

            return res;
        }
        console.log(fn(this.root, []));
    }

    inOrder() {
        function fn(node, res = []) {
            if (node == null) {
                return;
            }

            fn(node.left, res);
            res.push(node.val);
            fn(node.right, res);

            return res;
        }
        console.log(fn(this.root, []));
    }

    levelOder() {
        let res = [];

        function traverse(node, level) {
            if (node == null) {
                return;
            }

            if (res[level] == undefined) {
                res[level] = [];
            }

            res[level].push(node.val);

            console.log(res);
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }

        traverse(this.root, 0);
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
binaryTree.make([1, 2, 3, 4, 5, null, 6]);
binaryTree.preOder();
binaryTree.postOrder();
binaryTree.inOrder();
binaryTree.levelOder();
