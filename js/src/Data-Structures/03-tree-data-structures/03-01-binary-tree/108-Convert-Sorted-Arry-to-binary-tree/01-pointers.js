class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var sortedArrayToBST = function (nums) {
    function makeTree(nums, l, r) {
        if (l > r) {
            return null;
        }

        let mid = Math.floor((l + r) / 2);
        let node = new TreeNode(nums[mid]);

        node.left = makeTree(nums, l, mid - 1);
        node.right = makeTree(nums, mid + 1, r);

        return node;
    }

    return makeTree(nums, 0, nums.length - 1);
};

const nums = [-10, -3, 0, 5, 9];

const result = sortedArrayToBST(nums);
console.log(result);
