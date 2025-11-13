/* TIME COMPLEXICITY:
 *  n1 = length of nums
 *  n2 = length of nums
 *
 *      = O(n1 * n2)
 *      = O(n^2)
 */

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num_1 = nums[i];

        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue;
            }

            let num_2 = nums[j];

            if (num_1 + num_2 == target) {
                return [i, j];
            }
        }
    }
};

const nums = [3, 3];
const target = 6;

const result = twoSum(nums, target);
console.log(result);
