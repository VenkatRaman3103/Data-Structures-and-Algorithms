/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let result = [];

    let hashTable = {};

    let buckets = [];

    for (let i = 0; i < nums.length + 1; i++) {
        buckets.push([]);
    }

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashTable[key] == undefined) {
            hashTable[key] = 1;
        } else {
            hashTable[key] += 1;
        }
    }

    for (let [val, frequency] of Object.entries(hashTable)) {
        buckets[frequency].push(val);
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
        let bucket = buckets[i];

        for (let j = bucket.length - 1; j >= 0; j--) {
            if (result.length >= k) {
                return result;
            }

            let val = bucket[j];
            result.push(Number(val));
        }
    }
    return result;
};

const nums = [1, 1, 1, 2, 2, 2, 2, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
