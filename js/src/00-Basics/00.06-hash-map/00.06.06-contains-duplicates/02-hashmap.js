function containsDuplicate(nums) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];

        if (hashmap[key] == undefined) {
            hashmap[key] = 1;
        } else {
            hashmap[key] += 1;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        const key = nums[j];

        if (hashmap[key] > 1) {
            return true;
        }
    }

    return false;
}

const nums = [1, 2, 3, 4];
const result = containsDuplicate(nums);
console.log(result);
