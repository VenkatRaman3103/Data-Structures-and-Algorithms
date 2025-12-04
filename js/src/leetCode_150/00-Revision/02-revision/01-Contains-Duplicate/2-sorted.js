export var containsDuplicate = function (nums) {
    let sorted_nums = nums.sort((a, b) => a - b);

    for (let i = 1; i < sorted_nums.length; i++) {
        let cur_num = sorted_nums[i];
        let prev_num = sorted_nums[i - 1];

        if (cur_num == prev_num) {
            return true;
        }
    }

    return false;
};

const nums = [1, 0, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
