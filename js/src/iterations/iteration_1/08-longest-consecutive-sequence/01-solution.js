/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let setTable = new Set();

    for (let num of nums) {
        if (setTable.has(num) == false) {
            setTable.add(num);
        }
    }

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let arr = [];

        while (setTable.has(num)) {
            arr.push(num);
            num += 1;
        }

        if (count < arr.length) {
            count = arr.length;
        }
    }

    return count;
};

const nums = [100, 4, 200, 1, 3, 2];

const result = longestConsecutive(nums);
console.log(result);
