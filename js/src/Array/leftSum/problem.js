export function leftSum(nums) {
    const result = Array.from({ length: nums.length }).fill(0);

    const tempArr = [0, ...nums];

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = 0; j < i + 1; j++) {
            sum += tempArr[j];
        }
        result[i] = sum;
    }

    return result;
}

// const nums = [10, 4, 8, 3];
// const result = leftSum(nums);
// console.log(result);
