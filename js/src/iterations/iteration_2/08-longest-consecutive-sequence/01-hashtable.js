/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let hashTable = new Set();

    for (let n of nums) {
        hashTable.add(n);
    }

    let longest = 0;

    for (let n of nums) {
        if (!hashTable.has(n - 1)) {
            let curr = n;
            let len = 1;

            while (hashTable.has(curr + 1)) {
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
