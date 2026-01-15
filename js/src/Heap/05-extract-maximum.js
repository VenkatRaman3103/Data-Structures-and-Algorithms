class MaxHeap {
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

        return val;
    }

    heapifyUp(ind) {
        while (ind > 0) {
            let p = this._parent(ind);

            if (this.heap[p] < this.heap[ind]) {
                this._swap(p, ind);
            }

            ind = p;
        }
    }

    heapifyDown(ind) {
        while (true) {
            let largest = ind;

            let l = this._left(ind);
            let r = this._right(ind);

            if (this.heap[l] > this.heap[largest]) {
                largest = l;
            }

            if (this.heap[r] > this.heap[largest]) {
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

const nums = [60, 30, 50, 10, 20, 40];

for (let n of nums) {
    maxHeap.insert(n);
}

const max = maxHeap.remove();
console.log(max);

console.log(maxHeap.heap);
