import { binaryTree } from '../../modules/binary-tree.js';

var lowestCommonAncestor = function (root, p, q) {
    let curr = root;

    while (curr) {
        if (curr.val > p.val && curr.val > q.val) {
            curr = curr.left;
        } else if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        } else {
            return curr;
        }
    }
};

const root = binaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
const p = 2;
const q = 8;

const result = lowestCommonAncestor(root, p, q);
console.log(result);
