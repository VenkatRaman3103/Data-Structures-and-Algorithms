function getParentIndex(i) {
    return Math.floor((i - 1) / 2);
}

function getRightChild(i) {
    return i * 2 + 2;
}

function getLeftChild(i) {
    return i * 2 + 1;
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

var findKthLargest = function (nums, k) {
    let res = [];

    let heap = [];

    function heapifyUp(num) {
        heap.push(num);

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = getParentIndex(index);

            if (heap[index] > heap[parentIndex]) {
                swap(heap, index, parentIndex);
            }

            index = parentIndex;
        }
    }

    function heapifyDown() {
        let index = 0;

        while (true) {
            let largest = index;

            let left = getLeftChild(index);
            let right = getRightChild(index);

            if (heap[left] > heap[largest]) {
                largest = left;
            }

            if (heap[right] > heap[largest]) {
                largest = right;
            }

            swap(heap, largest, index);

            if (largest == index) {
                break;
            }

            index = largest;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        heapifyUp(key);
    }

    for (let i = 0; i < k; i++) {
        let max = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();

        heapifyDown();

        res.push(max);
    }

    return res[res.length - 1];
};

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
const result = findKthLargest(nums, k);
console.log(result);
