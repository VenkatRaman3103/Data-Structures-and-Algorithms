function intersection(nums_1, nums_2) {
    let res = [];

    let hashTable = {};

    for (let key of nums_1) {
        hashTable[key] = (hashTable[key] || 0) + 1;
    }

    for (let key of nums_2) {
        if (hashTable[key] != undefined) {
            res.push(key);
        }
    }

    return res;
}

const nums_1 = [1, 5, 2, 2, 3];
const nums_2 = [2, 3, 4];

const result = intersection(nums_1, nums_2);
console.log(result);
