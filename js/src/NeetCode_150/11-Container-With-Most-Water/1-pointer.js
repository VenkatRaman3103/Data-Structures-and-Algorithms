var maxArea = function (height) {
    let res = 0;

    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        let h = Math.min(height[l], height[r]);
        let b = r - l;

        let area = h * b;

        res = Math.max(area, res);

        if (height[l] <= height[r]) {
            l++;
        } else if (height[l] > height[r]) {
            r--;
        }
    }

    return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result);
