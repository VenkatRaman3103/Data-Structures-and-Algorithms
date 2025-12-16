function findDuplicates(nums) {
    let hashTable = {};

    let res = [];

    for (let n of nums) {
        if (hashTable[n] == undefined) {
            hashTable[n] = 1;
        } else {
            res.push(n);
            hashTable[n] += 1;
        }
    }

    return res;
}

const nums = [1, 2, 3, 2, 4, 3, 5];

const result = findDuplicates(nums);
console.log(result);
