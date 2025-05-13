function topKFrequent(nums, k) {
    let hashTable = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashTable[key] == undefined) {
            hashTable[key] = 1;
        } else {
            hashTable[key] += 1;
        }
    }

    for (let i = 0; i < k; i++) {
        let largest;
        for (let key of Object.keys(hashTable)) {
            if (largest == undefined) {
                largest = key;
            }

            if (hashTable[largest] < hashTable[key]) {
                largest = key;
            }
        }
        result.push(Number(largest));
        hashTable[largest] = 0;
    }

    console.log(hashTable, result);
    return result;
}

const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
