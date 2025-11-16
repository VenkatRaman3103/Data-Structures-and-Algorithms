var trap = function (height) {
    let res = 0;

    let maxLeft = [];
    let maxRight = [];

    for (let i = 0; i < height.length; i++) {
        let l = 0;

        for (let j = 0; j < i; j++) {
            let key = height[j];

            if (key > l) {
                l = key;
            }
        }

        maxLeft.push(l);
    }

    for (let i = height.length - 1; i >= 0; i--) {
        let r = 0;

        for (let j = i + 1; j < height.length; j++) {
            let key = height[j];

            if (key > r) {
                r = key;
            }
        }

        maxRight.unshift(r);
    }

    for (let i = 0; i < height.length; i++) {
        let val = Math.min(maxRight[i], maxLeft[i]) - height[i];

        if (val > 0) {
            res += val;
        }
    }

    return res;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);
