function log(value) {
    process.stdout.write(String(value));
}

function subarraySum(nums, k) {
    let count = 0;

    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            let sum = 0;

            for (let i = start; i < end; i++) {
                log(nums[i]);
                sum += nums[i];
            }

            if (sum == k) {
                count += 1;
            }
            console.log(end);
        }
    }
    return count;
}

const nums = [1, 2, 3];
const k = 3;
const result = subarraySum(nums, k);
console.log(result);
