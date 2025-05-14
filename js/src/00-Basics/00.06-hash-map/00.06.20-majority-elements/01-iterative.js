function majorityElement(nums) {
    let repeated = 0;
    let result = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let activeNum = nums[i];
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            let compare = nums[j];

            if (activeNum == compare) {
                count += 1;
            }
        }

        if (count > repeated) {
            repeated = count;
            result = activeNum;
        }
    }
    return result;
}

const nums = [3, 2, 3, 2, 2, 2, 2];
const result = majorityElement(nums);
console.clear(result);
