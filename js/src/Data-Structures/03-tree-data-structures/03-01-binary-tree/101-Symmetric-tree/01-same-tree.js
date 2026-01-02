import { binaryTree } from '../../../../modules/binary-tree.js';

function sameTree(a, b) {
    if (!a && !b) {
        return true;
    } else if (!a || !b) {
        return false;
    } else if (a.val != b.val) {
        return false;
    } else if (a && b && a.val == b.val) {
        return sameTree(a.left, b.right) && sameTree(a.right, b.left);
    }
}

var isSymmetric = function (root) {
    if (root == null) {
        return true;
    }

    return sameTree(root.left, root.right);
};

const root = binaryTree([1, 2, 2, 3, 4, 4, 3]);

const result = isSymmetric(root);
console.log(result);
