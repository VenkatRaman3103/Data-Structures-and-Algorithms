var topKFrequent = function (nums, k) {
    let hashTable = {};
    let res = [];

    let buckets = Array.from({ length: nums.length + 1 })
        .fill()
        .map(() => []);

    for (let num of nums) {
        hashTable[num] = hashTable[num] + 1 || 1;
    }

    for (let key of Object.keys(hashTable)) {
        let count = hashTable[key];

        buckets[count].push(Number(key));
    }

    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        let bucket = buckets[i];

        for (let num of bucket) {
            res.push(num);
        }
        if (res.length === k) break;
    }

    return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
