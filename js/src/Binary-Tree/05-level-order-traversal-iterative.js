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

function makeBinaryTree(arr) {
    let queue = [];
    let root = new Node(arr[0]);
    queue.push(root);

    let i = 1;

    while (queue.length > 0) {
        let node = queue.shift();

        if (i < arr.length && arr[i] != null) {
            let newNode = new Node(arr[i]);

            node.left = newNode;
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] != null) {
            let newNode = new Node(arr[i]);

            node.right = newNode;
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

const root = makeBinaryTree(nums);

binaryTree.root = root;
binaryTree.levelTraversal();
