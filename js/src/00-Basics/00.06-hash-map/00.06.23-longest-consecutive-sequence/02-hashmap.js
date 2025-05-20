function longestConsecutive(nums) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        hashTable[key] = 1 + (hashTable[key] || 0);
    }

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let arr = [];

        while (hashTable[num]) {
            arr.push(num);
            num += 1;
        }

        if (count < arr.length) {
            count = arr.length;
        }

        console.log(arr);
    }

    return count;
}

const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result);
