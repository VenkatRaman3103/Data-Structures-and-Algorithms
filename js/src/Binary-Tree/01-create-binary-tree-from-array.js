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
}

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
console.log(binaryTree.root);
