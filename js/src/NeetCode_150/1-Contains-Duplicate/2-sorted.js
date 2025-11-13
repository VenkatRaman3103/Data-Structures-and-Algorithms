var containsDuplicate = function (nums) {
    const sorted_arr = nums.sort();

    for (let i = 0; i < sorted_arr.length - 1; i++) {
        let key = sorted_arr[i];
        let compare = sorted_arr[i + 1];

        if (key == compare) {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
