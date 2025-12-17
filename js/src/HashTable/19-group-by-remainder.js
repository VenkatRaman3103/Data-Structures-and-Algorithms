function groupByRemainder(nums, k) {
    let hashTable = {};

    for (let n of nums) {
        let key = n % k;

        if (hashTable[key] == undefined) {
            hashTable[key] = [n];
        } else {
            hashTable[key].push(n);
        }
    }

    return hashTable;
}

const nums = [1, 2, 3, 4, 5, 6];

const divider = 3;

const result = groupByRemainder(nums, divider);
console.log(result);
