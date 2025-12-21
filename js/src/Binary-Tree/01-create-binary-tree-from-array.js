class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    makeBinaryTree(arr) {
        let queue = [];
        let root = new Node(arr[0]);
        queue.push(root);

        let i = 1;

        while (queue.length > 0) {
            let node = queue.pop();

            if (i < arr.length && arr[i] != null) {
                let leftNode = new Node(arr[i]);
                node.left = leftNode;
                queue.push(node.left);
            }
            i++;

            if (i < arr.length && arr[i] != null) {
                let rightNode = new Node(arr[i]);
                node.right = rightNode;
                queue.push(node.right);
            }
            i++;
        }

        this.root = root;
    }
}

const nums = [1, 2, 3, 4, 5, null, 6];

const binaryTree = new BinaryTree();
binaryTree.makeBinaryTree(nums);
