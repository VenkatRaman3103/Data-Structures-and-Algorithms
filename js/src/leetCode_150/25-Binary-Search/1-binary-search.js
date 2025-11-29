var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let m = Math.floor((r + l) / 2)

        if (nums[m] < target) {
            l = m + 1
        } else if (target < nums[m]) {
            r = m - 1
        } else {
            return m
        }
    }
    return -1

};

const nums = [-1, 0, 3, 5, 9, 12]
const target = 9
const result = search(nums, target)
console.log(result)
