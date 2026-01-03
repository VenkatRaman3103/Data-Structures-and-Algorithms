import { binaryTree, StackStruct } from '../../modules/binary-tree.js';

var kthSmallest = function (root, k) {
    let stack = new StackStruct();
    let curr = root;

    while (stack.size > 0 || curr != null) {
        if (curr != null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            k--;
            if (k === 0) {
                return curr.val;
            }
            curr = curr.right;
        }
    }
};

const root = binaryTree([3, 1, 4, null, 2]);
const k = 1;

const result = kthSmallest(root, k);
console.log(result);
