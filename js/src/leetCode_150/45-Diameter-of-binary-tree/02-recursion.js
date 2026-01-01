import { binaryTree } from './module.js';

function calcHeight(node) {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(calcHeight(node.left), calcHeight(node.right));
}

var diameterOfBinaryTree = function (root) {
    let max = 0;

    function helper(node) {
        if (!node) {
            return 0;
        }

        let left = helper(node.left);
        let right = helper(node.right);

        let d = left + right;

        max = Math.max(max, d);

        return 1 + Math.max(left, right);
    }

    helper(root);

    return max;
};

const root = binaryTree([3, 9, 20, null, null, 15, 7]);

const result = diameterOfBinaryTree(root);
console.log(result);
