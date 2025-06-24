/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let res = 0;

    for (let l = 0; l < height.length; l++) {
        for (let r = l + 1; r < height.length; r++) {
            let h = Math.min(height[l], height[r]);
            let b = r - l;

            let area = h * b;

            res = Math.max(res, area);
        }
    }
    return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result);
