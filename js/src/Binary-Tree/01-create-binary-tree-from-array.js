class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let q = [];
        q.push(this.root);

        while (q.length > 0) {
            let node = q.shift();

            if (node.left == null) {
                node.left = newNode;
                break;
            } else {
                q.push(node.left);
            }

            if (node.right == null) {
                node.right = newNode;
                break;
            } else {
                q.push(node.right);
            }
        }
    }

    makeTreeFromArray(arr) {
        let root = new Node(arr[0]);

        let q = [];
        q.push(root);

        let i = 1;

        while (q.length > 0) {
            let node = q.shift();

            if (arr[i] != null && i < arr.length) {
                let leftNode = new Node(arr[i]);
                node.left = leftNode;
                q.push(node.left);
            }
            i++;

            if (arr[i] != null && i < arr.length) {
                let rightNode = new Node(arr[i]);
                node.right = rightNode;
                q.push(node.right);
            }
            i++;
        }

        this.root = root;
    }
}

const binaryTree = new BinaryTree();

const nums = [1, 2, 3, 4, 5, null, 6];
binaryTree.makeTreeFromArray(nums);
console.log(binaryTree.root);
