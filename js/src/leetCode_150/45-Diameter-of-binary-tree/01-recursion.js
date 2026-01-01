import { binaryTree } from './module.js';

function calcHeight(node) {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(calcHeight(node.left), calcHeight(node.right));
}

var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }

    let lh = calcHeight(root.left);
    let rh = calcHeight(root.right);

    let diameter = lh + rh;

    let left = diameterOfBinaryTree(root.left);
    let right = diameterOfBinaryTree(root.right);

    let sub = Math.max(left, right);

    return Math.max(sub, diameter);
};

const root = binaryTree([3, 9, 20, null, null, 15, 7]);

const result = diameterOfBinaryTree(root);
console.log(result);
