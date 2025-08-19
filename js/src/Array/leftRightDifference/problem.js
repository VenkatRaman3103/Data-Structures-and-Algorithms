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

export function leftRightDifference(nums) {
    const result = Array.from({ length: nums.length }).fill(0);

    const left = leftSum(nums);
    const right = rightSum(nums);

    for (let i = 0; i < nums.length; i++) {
        const a = left[i];
        const b = right[i];

        const difference = Math.abs(a - b);

        result[i] = difference;
    }

    return result;
}
