var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let res = [];

    for (let a = 0; a < nums.length; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;

        let l = a + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[a] + nums[l] + nums[r];

            if (sum == 0) {
                res.push([nums[a], nums[l], nums[r]]);

                l++;
                r--;

                while (l < r && nums[l - 1] == nums[l]) {
                    l++;
                }

                while (l < r && nums[r + 1] == nums[r]) {
                    r--;
                }
            } else if (sum < 0) {
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
