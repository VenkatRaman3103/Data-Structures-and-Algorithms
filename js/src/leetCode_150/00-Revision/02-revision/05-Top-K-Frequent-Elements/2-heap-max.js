function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

export var topKFrequent = function (nums, k) {
    let res = [];
    let hashTable = {};
    let heap = [];

    for (let n of nums) {
        hashTable[n] = (hashTable[n] || 0) + 1;
    }

    for (let key of Object.keys(hashTable)) {
        heap.push(Number(key));

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (hashTable[heap[index]] > hashTable[heap[parentIndex]]) {
                swap(heap, parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    for (let i = 0; i < k; i++) {
        res.push(heap[0]);

        swap(heap, 0, heap.length - 1);
        heap.pop();

        let index = 0;

        while (true) {
            let largest = index;

            let l = index * 2 + 1;
            let r = index * 2 + 2;

            if (
                l < heap.length &&
                hashTable[heap[l]] > hashTable[heap[largest]]
            ) {
                largest = l;
            }

            if (
                r < heap.length &&
                hashTable[heap[r]] > hashTable[heap[largest]]
            ) {
                largest = r;
            }

            if (largest === index) break;

            swap(heap, index, largest);
            index = largest;
        }
    }

    return res;
};
