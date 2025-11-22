var topKFrequent = function (nums, k) {
    const hashTable = {};
    const result = [];

    for (let num of nums) {
        hashTable[num] = hashTable[num] + 1 || 1;
    }

    for (let i = 0; i < k; i++) {
        let largest;

        for (let key of Object.keys(hashTable)) {
            if (largest == undefined) {
                largest = key;
            }

            console.log(hashTable);
            if (hashTable[key] > hashTable[largest]) {
                largest = key;
            }
            console.log(key, hashTable[key], largest);
        }

        result.push(Number(largest));
        hashTable[largest] = 0;
    }

    return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
