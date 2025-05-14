function majorityElement(nums) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    let largest = hashMap[nums[0]];
    let result = nums[0];

    for (let key of Object.keys(hashMap)) {
        if (hashMap[key] > largest) {
            largest = hashMap[key];
            result = Number(key);
        }
    }

    return result;
}

const nums = [3, 2, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2];
const result = majorityElement(nums);
console.log(result);
