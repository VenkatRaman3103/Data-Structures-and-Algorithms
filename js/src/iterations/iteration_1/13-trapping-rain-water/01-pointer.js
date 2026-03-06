/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return res;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const result = trap(height);
console.log(result);
