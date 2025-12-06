export var longestConsecutive = function (nums) {
    let hashTable = {};

    for (let n of nums) {
        hashTable[n] = (hashTable[n] || 0) + 1;
    }

    let max = 0;
    let acc = 0;

    for (let n of nums) {
        if (hashTable[n - 1] == undefined) {
            let current = n;
            let len = 1;

            while (hashTable[current + 1] != undefined) {
                current++;
                len++;
            }

            max = Math.max(len, max);
        }
    }

    return max;
};

const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result);
