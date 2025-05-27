function removeDuplicates(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        let found = false;

        for (let j = 0; j < result.length; j++) {
            let compare = result[j];

            if (key == compare) {
                found = true;
            }
        }

        if (!found) {
            result.push(key);
        }
    }

    return result;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
