function removeDuplicates(nums) {
    let i = 1;
    let j = 1;

    while (j < nums.length) {
        if (nums[i - 1] != nums[j]) {
            nums[i] = nums[j];
            i++;
        }

        j++;
    }

    console.log(nums);
    return i;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
