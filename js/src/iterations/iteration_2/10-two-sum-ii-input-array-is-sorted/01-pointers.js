/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let val = numbers[l] + numbers[r];

        if (target == val) {
            return [l + 1, r + 1];
        }

        if (target < val) {
            r--;
        } else {
            l++;
        }
    }
};

const numbers = [2, 3, 4];
const target = 6;

const result = twoSum(numbers, target);
console.log(result);
