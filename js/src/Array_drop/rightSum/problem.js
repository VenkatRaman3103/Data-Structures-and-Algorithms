export function rightSum(nums) {
    let result = Array.from({ length: nums.length }).fill(0);

    let tempArr = [...nums, 0];

    for (let i = result.length - 1; i >= 0; i--) {
        let sum = 0;

        for (let j = i + 1; j <= nums.length; j++) {
            sum += tempArr[j];
        }
        result[i] = sum;
    }

    return result;
}

const nums = [10, 4, 8, 3];
const result = rightSum(nums);
console.log(result);
