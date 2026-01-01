import { binaryTree } from 'src/modules/binary-tree.js';

function sameTree(a, b) {
    if (a == null && b == null) {
        return true;
    } else if (a != null && b != null && a.val == b.val) {
        return sameTree(a.left, b.left) && sameTree(a.right, b.right);
    } else {
        false;
    }
}

var isSubtree = function (root, subRoot) {
    if (root == null && subRoot != null) {
        return false;
    } else if (root != null && subRoot == null) {
        return true;
    } else if (sameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const root = binaryTree([3, 4, 5, 1, 2]);
const subRoot = binaryTree([4, 1, 2]);

const result = isSubtree(root, subRoot);
console.log(result);
