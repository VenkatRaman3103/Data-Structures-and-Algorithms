import { makeBinaryTree } from '../module.js';

var postorderTraversal = function (root) {
    let res = [];

    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();

        res.unshift(node.value);

        if (node.left != null) {
            stack.push(node.left);
        }

        if (node.right != null) {
            stack.push(node.right);
        }
    }

    return res;
};

const root = makeBinaryTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);

const result = postorderTraversal(root);
console.log(result);
