var containsDuplicate = function (nums) {
    const sorted_arr = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted_arr.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }
    }

    return false;
};

const nums = [5, 0, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
