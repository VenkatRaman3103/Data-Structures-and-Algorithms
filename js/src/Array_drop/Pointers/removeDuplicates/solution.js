var removeDuplicates = function (nums) {
    let a = 0;
    let b = 0;

    while (a < nums.length) {
        if (nums[a] != nums[a + 1]) {
            [nums[a], nums[b]] = [nums[b], nums[a]];

            b++;
        }
        a++;
    }

    return b;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
