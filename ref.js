class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.isEmpty()) throw new Error('heap is empty');

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }

        return min;
    }

    siftUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[i] >= this.heap[parent]) break;

            this.swap(i, parent);
            i = parent;
        }
    }

    siftDown(i) {
        const n = this.heap.length;

        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && this.heap[left] < this.heap[smallest])
                smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest])
                smallest = right;

            if (smallest === i) break;

            this.swap(i, smallest);
            i = smallest;
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}
