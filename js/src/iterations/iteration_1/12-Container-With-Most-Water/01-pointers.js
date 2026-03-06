/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;

    let res = 0;

    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);

        res = Math.max(area, res);

        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const result = maxArea(height);
console.log(result);
