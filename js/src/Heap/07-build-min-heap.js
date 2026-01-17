class MinHeap {
    constructor() {
        this.heap = [];
    }

    _left(i) {
        return i * 2 + 1;
    }

    _right(i) {
        return i * 2 + 2;
    }

    _parent(i) {
        return Math.floor((i - 1) / 2);
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

            if (this.heap[ind] < this.heap[p]) {
                this._swap(ind, p);
            }

            ind = p;
        }
    }

    heapifyDown(ind) {
        while (true) {
            let smallest = ind;

            let l = this._left(ind);
            let r = this._right(ind);

            if (this.heap[l] < this.heap[smallest]) {
                smallest = l;
            }

            if (this.heap[r] < this.heap[smallest]) {
                smallest = r;
            }

            if (smallest == ind) {
                break;
            }

            this._swap(smallest, ind);

            ind = smallest;
        }
    }
}

const minHeap = new MinHeap();

const nums = [10, 5, 20, 2, 4];

for (let n of nums) {
    minHeap.insert(n);
}

console.log(minHeap.heap);
