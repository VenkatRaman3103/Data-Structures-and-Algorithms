var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)

        if (target == nums[m]) {
            return m;
        }

        if (nums[l] <= nums[m]) {
            if (target < nums[m] && target >= nums[l]) {
                r = m - 1
            } else {
                l = m + 1
            }
        } else {
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }

    return null
};

const nums = [7, -1, 0, 1, 2]
const target = -1
const result = search(nums, target)
console.log(result)
