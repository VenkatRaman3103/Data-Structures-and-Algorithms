var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let compare = nums[j];

            if (key == compare) {
                return true;
            }
        }
    }

    return false;
};

const nums = [0, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
