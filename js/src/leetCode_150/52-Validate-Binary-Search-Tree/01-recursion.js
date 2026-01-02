import { binaryTree, QueueStruct } from '../../modules/binary-tree.js';

function leftCheck(val, check) {
    return val < check;
}

function rightCheck(val, check) {
    return val > check;
}

var isValidBST = function (root) {
    if (!root) {
        return true;
    }

    let lc = valid(root.left, root.val, leftCheck);
    let rc = valid(root.right, root.val, rightCheck);

    if (!lc || !rc) {
        return false;
    }

    return isValidBST(root.left) && isValidBST(root.right);
};

function valid(node, limit, checkFn) {
    if (!node) {
        return true;
    }

    if (!checkFn(node.val, limit)) {
        return false;
    }

    return (
        valid(node.left, limit, checkFn) && valid(node.right, limit, checkFn)
    );
}

// const arr = [2, 1, 3];
const arr = [5, 1, 4, null, null, 3, 6];
const root = binaryTree(arr);

const result = isValidBST(root);
console.log(result);
