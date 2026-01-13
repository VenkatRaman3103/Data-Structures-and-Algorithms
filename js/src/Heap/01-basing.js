class MinHeap {
    constructor() {
        this.heap = [];
    }

    // helpers
    parentInd(ind) {
        return Math.floor((ind - 1) / 2);
    }

    leftInd(ind) {
        return ind * 2 + 1;
    }

    rightInd(ind) {
        return ind * 2 + 2;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(val) {
        this.heap.push(val);

        this.heapifyUp(this.heap.length);
    }

    pop() {
        if (this.heap.length == 0) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.heapifyDown(0);

        return min;
    }

    heapifyUp(ind) {
        while (ind > 0) {
            let p = this.parentInd(ind);

            if (this.heap[p] > this.heap[ind]) {
                this.swap(p, ind);
            }

            ind = p;
        }
    }

    heapifyDown(ind) {
        while (true) {
            let smallest = ind;

            let l = this.leftInd(ind);
            let r = this.rightInd(ind);

            if (this.heap[l] < this.heap[smallest]) {
                smallest = l;
            }

            if (this.heap[r] < this.heap[smallest]) {
                smallest = r;
            }

            this.swap(ind, smallest);

            if (smallest == ind) {
                break;
            }

            ind = smallest;
        }
    }
}

const minHeap = new MinHeap();

minHeap.push(1);
for (let i = 5; i <= 9; i++) {
    minHeap.push(i);
}

console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.heap);
