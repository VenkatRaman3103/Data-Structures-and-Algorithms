var trap = function (height) {
    let res = 0;

    let l = 0;
    let r = height.length - 1;

    let maxL = height[l];
    let maxR = height[r];

    while (l < r) {
        if (height[l] <= height[r]) {
            l++;

            maxL = Math.max(maxL, height[l]);
            res += maxL - height[l];
        } else {
            r--;

            maxR = Math.max(maxR, height[r]);
            res += maxR - height[r];
        }
    }

    return res;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);
