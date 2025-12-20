import { makeBinaryTree, Queue } from '../module.js';

var preorderTraversal = function (root) {
    let res = [];

    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();

        res.push(node.value);

        if (node.right != null) {
            stack.push(node.right);
        }

        if (node.left != null) {
            stack.push(node.left);
        }
    }

    return res;
};

const nums = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];

const binaryTree = makeBinaryTree(nums);

const result = preorderTraversal(binaryTree);
console.log(result);
