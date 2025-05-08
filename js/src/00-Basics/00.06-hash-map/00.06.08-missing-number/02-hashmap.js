function missingNumber(nums) {
    let hashMap = {};

    for (let i = 0; i <= nums.length; i++) {
        hashMap[i] = 0;
    }

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashMap[key] == 0) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        if (hashMap[i] == 0) {
            return i;
        }
    }

    return -1;
}

// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const nums = [0, 1];
const result = missingNumber(nums);
console.log(result);
