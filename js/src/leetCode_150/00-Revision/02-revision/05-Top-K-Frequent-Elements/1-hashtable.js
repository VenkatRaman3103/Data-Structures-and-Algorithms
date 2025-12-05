export var topKFrequent = function (nums, k) {
    let res = [];
    let hashtable = {};

    for (let n of nums) {
        hashtable[n] = (hashtable[n] || 0) + 1;
    }

    for (let i = 0; i < k; i++) {
        let max = 0;
        let max_key = '';

        for (let key of Object.keys(hashtable)) {
            if (max < hashtable[key]) {
                max = hashtable[key];
                max_key = key;
            }
        }

        res.push(Number(max_key));
        hashtable[max_key] = 0;
    }

    console.log(hashtable);
    return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
