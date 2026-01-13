import { BinaryTree } from './modules.js';

function count(root, acc, res) {
    if (root == null) {
        return;
    }

    if ((root.left == null) & (root.right == null)) {
        res.push(acc);
    }

    acc += 1;

    count(root.left, acc, res);
    count(root.right, acc, res);
}

function countFromRootToLeaf(root) {
    let res = [];

    count(root, 1, res);

    return res;
}

const binaryTree = new BinaryTree();

const nodes = [1, 2, 3, 4, 5, 6, 7, 8];
binaryTree.make(nodes);

const result = countFromRootToLeaf(binaryTree.root);
console.log(result);
