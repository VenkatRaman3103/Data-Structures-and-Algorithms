function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            if (num1 == num2) {
                return true;
            }
        }
    }
    return false;
}

const nums = [1, 2, 3, 4];
const result = containsDuplicate(nums);
console.log(result);
