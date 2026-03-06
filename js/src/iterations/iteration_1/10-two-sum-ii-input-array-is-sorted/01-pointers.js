/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let l_num = numbers[l];
        let r_num = numbers[r];

        let val = l_num + r_num;

        if (val == target) {
            return [l + 1, r + 1];
        }

        if (val > target) {
            r--;
        } else {
            l++;
        }
    }
};

const numbers = [2, 7, 11, 15];
const target = 9;

const result = twoSum(numbers, target);
console.log(result);
