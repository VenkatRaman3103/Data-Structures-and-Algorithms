var topKFrequent = function (nums, k) {
    let result = [];

    let hashTable = {};

    for (let num of nums) {
        hashTable[num] = hashTable[num] + 1 || 1;
    }

    let heap = [];

    for (let key of Object.keys(hashTable)) {
        heap.push(Number(key));

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (hashTable[heap[parentIndex]] < hashTable[heap[index]]) {
                [heap[parentIndex], heap[index]] = [
                    heap[index],
                    heap[parentIndex],
                ];
            }

            index = parentIndex;
        }

        console.log(heap);
    }

    for (let i = 0; i < k; i++) {
        let max = heap[0];
        result.push(max);

        heap[0] = heap[heap.length - 1];
        heap.pop();

        let index = 0;

        while (true) {
            let largest = index;

            let left = index * 2 + 1;
            let right = index * 2 + 2;

            if (hashTable[heap[left]] > hashTable[heap[largest]]) {
                largest = left;
            }

            if (hashTable[heap[right]] > hashTable[heap[largest]]) {
                largest = right;
            }

            if (index == largest) {
                break;
            }

            [heap[index], heap[largest]] = [heap[largest], heap[index]];
            index = largest;
        }
    }

    return result;
};

const nums = [1, 1, 1, 2, 2, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
