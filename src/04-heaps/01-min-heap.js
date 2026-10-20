class MinHeap {
    constructor() {
        this.heap = [];
    }

    _getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    _getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    _getRightChildIndex(i) {
        return i * 2 + 2;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    _heapifyUp(i) {
        while (i > 0) {
            let p = this._getParentIndex(i);

            if (this.heap[i] < this.heap[p]) {
                this._swap(i, p);
                i = p;
            } else {
                break;
            }
        }
    }

    _heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let smallest = i;

            let r = this._getRightChildIndex(i);
            let l = this._getLeftChildIndex(i);

            if (l < n && this.heap[l] < this.heap[smallest]) {
                smallest = l;
            }

            if (r < n && this.heap[r] < this.heap[smallest]) {
                smallest = r;
            }

            if (smallest == i) {
                break;
            }

            this._swap(smallest, i);

            i = smallest;
        }
    }

    insert(val) {
        this.heap.push(val);

        let n = this.heap.length - 1;

        this._heapifyUp(n);
    }

    remove() {
        if (this.isEmpty()) {
            return null;
        }

        let val = this.heap[0];

        let n = this.heap.length - 1;

        this.heap[0] = this.heap[n];
        this.heap.pop();

        this._heapifyDown(0);

        return val;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length == 0;
    }
}

const minHeap = new MinHeap();

const arr = [1, 10, 2, 11, 12, 3, 4, 13, 14];

for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    minHeap.insert(key);
}
