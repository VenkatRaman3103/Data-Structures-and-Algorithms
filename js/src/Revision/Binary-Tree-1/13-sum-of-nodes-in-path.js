import { BinaryTree } from './modules.js';

function sum(root, acc, res) {
    if (root == null) {
        return;
    }

    acc += root.val;

    if (root.left == null && root.right == null) {
        res.push(acc);
    }

    sum(root.left, acc, res);
    sum(root.right, acc, res);
}

function sumOfPaths(root) {
    let res = [];

    sum(root, 0, res);

    return res;
}

const binaryTree = new BinaryTree();

const nodes = [1, 2, 3, 4, 5, 6];
binaryTree.make(nodes);

const result = sumOfPaths(binaryTree.root);
console.log(result);
