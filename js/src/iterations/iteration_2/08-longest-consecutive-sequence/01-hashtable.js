/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (hashTable[num] == undefined) {
            hashTable[num] = 1;
        } else {
            hashTable[num] += 1;
        }
    }

    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (hashTable[num - 1] == undefined) {
            let curr = num;

            let len = 1;

            while (hashTable[curr + 1] != undefined) {
                curr += 1;
                len += 1;
            }

            longest = Math.max(longest, len);
        }
    }

    return longest;
};

const nums = [100, 4, 200, 1, 3, 2];

const result = longestConsecutive(nums);
console.log(result);
