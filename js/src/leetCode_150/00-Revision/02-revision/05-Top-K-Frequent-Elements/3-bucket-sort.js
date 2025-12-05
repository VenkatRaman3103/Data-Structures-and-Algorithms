export var topKFrequent = function (nums, k) {
    let hashTable = {};

    let buckets = new Array(nums.length).fill().map(() => []);

    for (let n of nums) {
        hashTable[n] = (hashTable[n] || 0) + 1;
    }

    for (let key of Object.keys(hashTable)) {
        let i = hashTable[key];

        buckets[i - 1].push(Number(key));
    }

    let res = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
        let subArr = buckets[i];

        for (let n of subArr) {
            if (res.length < k) {
                res.push(n);
            }
        }
    }

    return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
