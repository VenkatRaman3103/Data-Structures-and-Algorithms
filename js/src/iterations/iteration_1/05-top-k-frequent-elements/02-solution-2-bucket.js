/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let bucketsArr = [];

    for (let i = 0; i < nums.length + 1; i++) {
        bucketsArr.push([]);
    }

    let frequency = {};

    for (let n of nums) {
        if (frequency[n] == undefined) {
            frequency[n] = 1;
        } else {
            frequency[n] += 1;
        }
    }

    for (let [key, val] of Object.entries(frequency)) {
        bucketsArr[val].push(key);
    }

    let result = [];

    for (let i = bucketsArr.length - 1; i >= 0 && result.length < k; i--) {
        let bucket = bucketsArr[i];

        for (let n of bucket) {
            result.push(Number(n));

            if (result.length == k) {
                break;
            }
        }
    }

    return result;
};

const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
