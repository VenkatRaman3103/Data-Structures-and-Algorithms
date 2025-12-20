import { queue } from './0-modules.js';

class node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarytree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newnode = new node(value);

        if (this.root == null) {
            this.root = newnode;
            return;
        }

        let queue = new queue();
        queue.enqueue(this.root);

        while (queue.length > 0) {
            let node = queue.dequeue();

            if (node.left == null) {
                node.left = newnode;
                break;
            } else {
                queue.enqueue(node.left);
            }

            if (node.right == null) {
                node.right = newnode;
                break;
            } else {
                queue.enqueue(node.right);
            }
        }
    }

    inorder() {
        let res = [];

        let stack = [];
        let current = this.root;

        while (stack.length > 0 || current != null) {
            if (current != null) {
                stack.push(current);
                current = current.left;
            } else {
                current = stack.pop();
                res.push(current.value);
                current = current.right;
            }
        }

        return res;
    }
}

const binarytree = new binarytree();

const nums = [1, 2, 3, 4, 5, null, 6];

const nodes = nums.map((n) => (n == null ? null : new node(n)));

for (let i = 0; i < nums.length; i++) {
    let node = nodes[i];

    if (node != null) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;

        if (left < nums.length) {
            node.left = nodes[left];
        }

        if (right < nums.length) {
            node.right = nodes[right];
        }
    }
}

binarytree.root = nodes[0];
console.log(binarytree.inorder());
