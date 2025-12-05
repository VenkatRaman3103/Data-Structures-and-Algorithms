export var productExceptSelf = function (nums) {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        let acc = 1;

        for (let j = 0; j < nums.length; j++) {
            let a = nums[j];

            if (i != j) {
                acc *= a;
            }
        }

        if (acc == -0) {
            res.push(0);
            continue;
        }

        res.push(acc);
    }

    return res;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
