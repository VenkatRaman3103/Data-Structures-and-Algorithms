var threeSum = function (nums) {
    let res = [];

    nums.sort((a, b) => a - b);

    for (let a = 0; a < nums.length; a++) {
        let l = a + 1;
        let r = nums.length - 1;

        if (a > 0 && nums[a] == nums[a - 1]) {
            continue;
        }

        while (l < r) {
            let val = nums[a] + nums[l] + nums[r];

            if (val < 0) {
                l++;
            } else if (val > 0) {
                r--;
            } else {
                res.push([nums[a], nums[l], nums[r]]);

                l++;

                while (l < r && nums[l] == nums[l - 1]) {
                    l++;
                }
            }
        }
    }

    return res;
};

const nums = [-1, 0, 1, 2, -1, -4];

const result = threeSum(nums);
console.log(result);
