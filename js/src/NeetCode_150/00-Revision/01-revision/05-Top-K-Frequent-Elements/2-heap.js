var topKFrequent = function (nums, k) {
    let heap = [];

    let res = [];

    let hashTable = {};

    for (let key of nums) {
        if (hashTable[key] != undefined) {
            hashTable[key] += 1;
        } else {
            hashTable[key] = 1;
        }
    }

    function swap(a, b) {
        [heap[a], heap[b]] = [heap[b], heap[a]];
    }

    function getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    function getRightChildIndex(i) {
        return i * 2 + 1;
    }

    function getLeftChildIndex(i) {
        return i * 2 + 2;
    }

    function heapifyUp(num) {
        heap.push(Number(num));

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = getParentIndex(index);

            if (hashTable[heap[parentIndex]] < hashTable[heap[index]]) {
                swap(parentIndex, index);
            }

            index = parentIndex;
        }
    }

    function heapifyDown() {
        swap(0, heap.length - 1);
        heap.pop();

        let index = 0;

        while (true) {
            let largest = index;

            let left = getLeftChildIndex(index);
            let right = getRightChildIndex(index);

            if (hashTable[heap[left]] > hashTable[heap[largest]]) {
                largest = left;
            }

            if (hashTable[heap[right]] > hashTable[heap[largest]]) {
                largest = right;
            }

            swap(largest, index);

            if (index == largest) {
                break;
            }

            index = largest;
        }
    }

    for (let key of Object.keys(hashTable)) {
        console.log(key);
        heapifyUp(key);
    }

    for (let i = 0; i < k; i++) {
        res.push(heap[0]);
        heapifyDown();
    }

    return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
