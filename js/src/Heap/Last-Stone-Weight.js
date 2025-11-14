function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

var lastStoneWeight = function (stones) {
    let heap = [];

    function heapifyUp(stone) {
        heap.push(stone);

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (heap[index] > heap[parentIndex]) {
                swap(heap, index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    for (let stone of stones) {
        heapifyUp(stone);
    }

    function heapifyDown() {
        const max = heap[0];

        swap(heap, 0, heap.length - 1);
        heap.pop();

        let index = 0;

        while (true) {
            let largest = index;

            let left = index * 2 + 1;
            let right = index * 2 + 2;

            if (left < heap.length && heap[left] > heap[largest]) {
                largest = left;
            }

            if (right < heap.length && heap[right] > heap[largest]) {
                largest = right;
            }

            if (index == largest) {
                break;
            }

            swap(heap, index, largest);
            index = largest;
        }

        return max;
    }

    while (heap.length > 1) {
        let s1 = heapifyDown();
        let s2 = heapifyDown();

        if (s1 != s2) {
            const diff = Math.abs(s1 - s2);

            heapifyUp(diff);
        }
    }

    return heap.length === 0 ? 0 : heap[0];
};

const stones = [2, 7, 4, 1, 8, 1];
const result = lastStoneWeight(stones);
console.log(result);
