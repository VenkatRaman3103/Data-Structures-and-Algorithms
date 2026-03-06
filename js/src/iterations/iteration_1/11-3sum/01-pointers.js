/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums);

    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let val = nums[i] + nums[l] + nums[r];

            if (val == 0) {
                res.push([nums[i], nums[l], nums[r]]);

                l++;
                r--;

                while (l < r && nums[l - 1] == nums[l]) {
                    l++;
                }

                while (l < r && nums[r + 1] == nums[r]) {
                    r--;
                }
            } else if (val < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
};

const nums = [-1, 0, 1, 2, -1, -4];

const result = threeSum(nums);
console.log(result);
