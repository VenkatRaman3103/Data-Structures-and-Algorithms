import { binaryTree, QueueStruct } from '../../modules/binary-tree.js';

var rightSideView = function (root) {
    if (!root) {
        return [];
    }

    let res = [];

    let q = new QueueStruct();
    q.enqueue(root);

    while (q.length > 0) {
        let leftMost;

        let qLength = q.length;

        for (let i = 0; i < qLength; i++) {
            let node = q.dequeue();

            leftMost = node;

            if (node.left != null) {
                q.enqueue(node.left);
            }

            if (node.right != null) {
                q.enqueue(node.right);
            }
        }
        res.push(leftMost.val);
    }
    return res;
};

const root = binaryTree([1, 2, 3, null, 5, null, 4]);

const result = rightSideView(root);
console.log(result);
