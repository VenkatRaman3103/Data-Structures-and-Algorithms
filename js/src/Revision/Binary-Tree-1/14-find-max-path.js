import { BinaryTree } from './modules.js';

function travers(root) {
    if (root == null) {
        return 0;
    }

    const l = travers(root.left);
    const r = travers(root.right);

    return 1 + Math.max(l, r);
}

function findMaxPath(root) {
    return travers(root);
}

const binaryTree = new BinaryTree();

const nodes = [1, 2, 3, 4, 5, 6, null, null, 9];
binaryTree.make(nodes);

const result = findMaxPath(binaryTree.root);
console.log(result);
