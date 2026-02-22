class MaxHeapStruct {
    constructor() {
        this.heap = [];
        this.length = 0;
    }

    _parent(i) {
        return Math.floor((i - 1) / 2);
    }

    _leftChild(i) {
        return i * 2 + 1;
    }

    _rightChild(i) {
        return i * 2 + 2;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    enqueue(obj) {
        this.heap.push(obj);
        this.heapifyUp(this.heap.length - 1);
        this.length += 1;
    }

    dequeue() {
        let val = this.heap[0];

        this.heap[0] = this.heap[this.heap.length - 1];

        this.heap.pop();

        this.heapifyDown(0);

        this.length -= 1;

        return val;
    }

    heapifyUp(index) {
        while (index > 0) {
            let parent = this._parent(index);

            if (this.heap[index][1] > this.heap[parent][1]) {
                this._swap(index, parent);
            }

            index = parent;
        }
    }

    heapifyDown(index) {
        while (true) {
            let max = index;

            let left = this._leftChild(index);
            let right = this._rightChild(index);

            if (
                left < this.heap.length &&
                this.heap[left][1] > this.heap[max][1]
            ) {
                max = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][1] > this.heap[max][1]
            ) {
                max = right;
            }

            if (max == index) {
                break;
            }

            this._swap(max, index);

            index = max;
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let frequency = {};

    for (let n of nums) {
        if (frequency[n] == undefined) {
            frequency[n] = 1;
        } else {
            frequency[n] += 1;
        }
    }

    const maxHeap = new MaxHeapStruct();

    for (let ele of Object.entries(frequency)) {
        maxHeap.enqueue(ele);
    }

    let result = [];

    for (let i = 0; i < k; i++) {
        let ele = maxHeap.dequeue();
        result.push(Number(ele[0]));
    }

    return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(result);
