function findUnique(nums) {
    let hashTable = {};

    let res = [];

    for (let n of nums) {
        if (hashTable[n] == undefined) {
            hashTable[n] = 1;
        } else {
            hashTable[n] += 1;
        }
    }

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] == 1) {
            res.push(Number(key));
        }
    }

    return res;
}

const nums = [1, 2, 2, 3, 3, 4];
const result = findUnique(nums);
console.log(result);
