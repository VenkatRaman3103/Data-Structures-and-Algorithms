var maxSlidingWindow = function (nums, k) {
    let res = [];

    let deque = [];
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
            deque.pop();
        }

        deque.push(r);

        if (l > deque[0]) {
            deque.shift();
        }

        if (r + 1 >= k) {
            res.push(nums[deque[0]]);

            l += 1;
        }

        r += 1;
    }

    return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const result = maxSlidingWindow(nums, k);
console.log(result);
