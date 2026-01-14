class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _parent(i) {
        return Math.floor((i - 1) / 2);
    }

    _left(i) {
        return i * 2 + 1;
    }

    _right(i) {
        return i * 2 + 2;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    remove() {
        let val = this.heap[0];

        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.heapifyDown(0);

        return val;
    }

    heapifyUp(ind) {
        while (ind > 0) {
            let p = this._parent(ind);

            if (this.heap[ind] > this.heap[p]) {
                this._swap(ind, p);
            }

            ind = p;
        }
    }

    heapifyDown(ind) {
        while (true) {
            let largest = ind;

            let l = this._left(ind);
            let r = this._right(ind);

            if (l < this.heap.length && this.heap[l] > this.heap[largest]) {
                largest = l;
            }

            if (r < this.heap.length && this.heap[r] > this.heap[largest]) {
                largest = r;
            }

            if (largest == ind) {
                break;
            }

            this._swap(largest, ind);

            ind = largest;
        }
    }
}

const maxHeap = new MaxHeap();

for (let i = 1; i <= 5; i++) {
    maxHeap.insert(i);
}

const removed = maxHeap.remove();
console.log(removed);

console.log(maxHeap.heap);
