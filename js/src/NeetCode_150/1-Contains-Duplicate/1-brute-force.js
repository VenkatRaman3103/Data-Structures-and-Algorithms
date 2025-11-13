var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        for (let j = 0; j < nums.length; j++) {
            if (j != i) {
                let compare = nums[j];

                if (key == compare) {
                    return true;
                }
            }
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
