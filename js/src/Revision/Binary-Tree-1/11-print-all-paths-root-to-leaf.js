import { BinaryTree } from './modules.js';

function formatter(nodes) {
    let acc = '';

    for (let i = 0; i <= nodes.length - 1; i++) {
        let n = nodes[i];
        if (i == nodes.length - 1) {
            acc += `${n}`;
        } else {
            acc += `${n}->`;
        }
    }

    return acc;
}
console.log(formatter([1, 2, 3, 4, 5]));

function printPaths(root, path, paths) {
    if (root == null) {
        return null;
    }

    path.push(root.val);

    if (root.left == null && root.right == null) {
        paths.push(formatter([...path]));
    }

    printPaths(root.left, path, paths);
    printPaths(root.right, path, paths);

    path.pop();
}

const binaryTree = new BinaryTree();

const nodes = [1, 2, 3, 4, 5, 6];
binaryTree.make(nodes);

function getPaths(root) {
    const paths = [];
    printPaths(binaryTree.root, [], paths);
    return paths;
}

const result = getPaths(binaryTree.root);
console.log(result);
