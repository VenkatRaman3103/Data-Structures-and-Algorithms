var findRelativeRanks = function (score) {
    const heap = [];

    const hashTable = {};

    function getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    function getRightChildIndex(i) {
        return i * 2 + 2;
    }

    function getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    function swap(a, b) {
        [heap[a], heap[b]] = [heap[b], heap[a]];
    }

    function heapifyDown() {
        let index = 0;

        while (true) {
            let largest = index;

            let left = getLeftChildIndex(index);
            let right = getRightChildIndex(index);

            if (heap[left] > heap[largest]) {
                largest = left;
            }

            if (heap[right] > heap[largest]) {
                largest = right;
            }

            swap(largest, index);

            if (index == largest) {
                break;
            }

            index = largest;
        }
    }

    function heapifyUp(num) {
        heap.push(num);

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = getParentIndex(index);

            if (heap[index] > heap[parentIndex]) {
                swap(parentIndex, index);
            }

            index = parentIndex;
        }
    }

    for (let i = 0; i < score.length; i++) {
        let key = score[i];

        heapifyUp(key);
    }

    let ranks = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];

    for (let i = 0; i < score.length; i++) {
        let max = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();

        if (i < 3) {
            hashTable[max] = ranks[i];
        } else {
            hashTable[max] = String(i + 1);
        }

        heapifyDown();
    }

    for (let i = 0; i < score.length; i++) {
        let s = score[i];

        if (hashTable[s] != undefined) {
            score[i] = hashTable[s];
        }
    }

    return score;
};

const score = [10, 3, 8, 9, 4];
const result = findRelativeRanks(score);
console.log(result);
