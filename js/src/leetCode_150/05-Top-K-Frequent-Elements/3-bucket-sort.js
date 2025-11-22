var topKFrequent = function (nums, k) {
    const result = [];
    const hashTable = {};

    for (let num of nums) {
        hashTable[num] = hashTable[num] + 1 || 1;
    }

    const buckets = Array.from({ length: nums.length + 1 })
        .fill()
        .map(() => []);

    for (let num of Object.keys(hashTable)) {
        let count = hashTable[num];

        console.log(num, count, buckets[count]);
        buckets[count].push(Number(num));
    }

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
        }
    }

    return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
