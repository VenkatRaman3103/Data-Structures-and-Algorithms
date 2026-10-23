class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    _getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    _getRigthChildIndex(i) {
        return i * 2 + 2;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    _heapifyUp(i) {
        while (i > 0) {
            let p = this._getParentIndex(i);

            if (this.heap[i] > this.heap[p]) {
                this._swap(p, i);
                i = p;
            } else {
                break;
            }
        }
    }

    _heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let biggest = i;
            let l = this._getLeftChildIndex(i);
            let r = this._getRigthChildIndex(i);

            if (l < n && this.heap[l] > this.heap[biggest]) {
                biggest = l;
            }

            if (r < n && this.heap[r] > this.heap[biggest]) {
                biggest = r;
            }

            if (biggest == i) {
                break;
            }

            this._swap(biggest, i);

            i = biggest;
        }
    }

    insert(val) {
        this.heap.push(val);

        let l = this.heap.length - 1;

        this._heapifyUp(l);
    }

    remove() {
        if (this.isEmpty()) {
            return null;
        }

        let val = this.heap[0];

        let l = this.heap.length - 1;

        this.heap[0] = this.heap[l];
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
