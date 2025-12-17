function hasDuplicates(nums) {
    let hashTable = {};

    for (let n of nums) {
        if (hashTable[n] == undefined) {
            hashTable[n] = 1;
        } else {
            hashTable[n] += 1;
            return true;
        }
    }

    return false;
}

const nums = [1, 2, 3, 4, 2];
const result = hasDuplicates(nums);
console.log(result);
