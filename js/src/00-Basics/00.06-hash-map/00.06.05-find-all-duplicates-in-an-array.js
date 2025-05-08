// NOTE: find all duplicates using iteratice method
function findAllDuplicate_iterative(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];

        for (let j = i; j < nums.length - 1; j++) {
            let num2 = nums[j + 1];

            if (num1 == num2) {
                result.push(num1);
            }
        }
    }
    return result;
}

// let nums = [4, 3, 2, 7, 8, 2, 3, 1];
//
// const result = findAllDuplicate_iterative(nums);
// console.log(result);

// NOTE: find all duplicates using hashmap
function findAllDuplicate_hashmap(nums) {
    let hashmap = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (hashmap[num] == undefined) {
            hashmap[num] = 1;
        } else {
            hashmap[num] += 1;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        let key = nums[j];
        if (hashmap[key] > 1) {
            result.push(key);
            hashmap[key] -= 1;
        }
    }

    return result;
}

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

const result = findAllDuplicate_hashmap(nums);
console.log(result);
