var productExceptSelf = function (nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let acc = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                let num = nums[j];

                acc *= num;
            }
        }

        res.push(acc);
        acc = 1;
    }

    return res;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
