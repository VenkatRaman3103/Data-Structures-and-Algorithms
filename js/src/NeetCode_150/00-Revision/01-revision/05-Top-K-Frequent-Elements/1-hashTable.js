var topKFrequent = function (nums, k) {
    let hashTable = {};
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (hashTable[num] != undefined) {
            hashTable[num] += 1;
        } else {
            hashTable[num] = 1;
        }
    }

    for (let i = 0; i < k; i++) {
        let largest;
        console.log(largest);

        for (let key of Object.keys(hashTable)) {
            if (largest == undefined) {
                largest = key;
            }

            if (hashTable[key] > hashTable[largest]) {
                largest = key;
            }

            console.log(largest);
        }
        res.push(Number(largest));

        hashTable[largest] = 0;
    }

    return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
