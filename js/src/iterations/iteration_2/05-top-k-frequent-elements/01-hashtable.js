/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hashTable = {};

    for (let n of nums) {
        if (hashTable[n] == undefined) {
            hashTable[n] = 1;
        } else {
            hashTable[n] += 1;
        }
    }

    let result = [];

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

    return result;
};

const nums = [1, 1, 1, 2, 2, 2, 2, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
