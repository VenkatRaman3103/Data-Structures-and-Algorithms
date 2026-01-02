import { binaryTree, StackStruct } from '../../src/modules/binary-tree.js';

function printNodeAtLevel(root, k) {
    if (root == null) {
        return [];
    }

    let res = [];

    let stack = new StackStruct();
    stack.push([root, 0]);

    while (stack.size > 0) {
        let [node, level] = stack.pop();

        if (level == k) {
            res.push(node.val);
        } else if (level > k) {
            break;
        }

        if (node.left != null) {
            stack.push([node.left, level + 1]);
        }

        if (node.right != null) {
            stack.push([node.right, level + 1]);
        }
    }

    return res;
}

const root = binaryTree([1, 2, 3, 4, 5, null, 6]);

const result = printNodeAtLevel(root, 2);
console.log(result);
