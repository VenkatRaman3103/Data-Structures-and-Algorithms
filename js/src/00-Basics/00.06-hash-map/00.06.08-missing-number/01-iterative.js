function missingNumber(nums) {
    for (let i = 0; i <= nums.length; i++) {
        console.log(i);
        let found = false;

        for (let j = 0; j < nums.length; j++) {
            let key = nums[j];
            if (key == i) {
                found = true;
            }
        }
        if (!found) {
            return i;
        }
    }
}

// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const nums = [0, 1];
const result = missingNumber(nums);
console.log(result);
