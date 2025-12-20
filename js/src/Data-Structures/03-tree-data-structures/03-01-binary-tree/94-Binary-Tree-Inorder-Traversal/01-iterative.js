import { makeBinaryTree } from '../module.js';

var inorderTraversal = function (root) {
    if (!root) {
        return [];
    }

    let res = [];

    let stack = [];
    let curr = root;

    while (stack.length > 0 || curr != null) {
        if (curr != null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            res.push(curr.value);
            curr = curr.right;
        }
    }

    return res;
};

const nums = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];

const binaryTree = makeBinaryTree(nums);
const result = inorderTraversal(binaryTree);
console.log(result);
