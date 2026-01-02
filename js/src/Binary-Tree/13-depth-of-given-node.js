import { binaryTree, StackStruct } from '../../src/modules/binary-tree.js';

function depthOfTarget(root, target) {
    if (root == null) {
        return 0;
    }

    let stack = new StackStruct();
    stack.push([root, 0]);

    while (stack.size > 0) {
        let [node, depth] = stack.pop();

        if (node.val == target) {
            return depth;
        }

        if (node.left != null) {
            stack.push([node.left, depth + 1]);
        }

        if (node.right != null) {
            stack.push([node.right, depth + 1]);
        }
    }

    return -1;
}

const root = binaryTree([1, 2, 3, 4, 5, null, 6]);

const result = depthOfTarget(root, 5);
// const result = findDepth(root);
console.log(result);
