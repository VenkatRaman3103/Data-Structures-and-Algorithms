import { binaryTree } from './module.js';

var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    } else if (p.val != q.val) {
        return false;
    } else if (p && q && p.val == q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};

const p = binaryTree([3, 9, 20, null, null, 15, 7]);
const q = binaryTree([3, 9, 20, null, null, 15, 7]);

const result = isSameTree(p, q);
console.log(result);
