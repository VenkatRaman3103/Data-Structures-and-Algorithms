/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;

    let leftMax = Array.from({ length: n }).fill(0);
    let rightMax = Array.from({ length: n }).fill(0);

    let l = 0;
    let r = n - 1;

    leftMax[0] = height[l];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    rightMax[n - 1] = height[r];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    let acc = 0;

    let result = Array.from({ length: n }).fill(0);
    for (let i = 0; i < n; i++) {
        result[i] = Math.min(leftMax[i], rightMax[i]) - height[i];
        acc += result[i];
    }

    return acc;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const result = trap(height);
console.log(result);
