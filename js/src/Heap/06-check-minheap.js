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
        //
    }

    remove() {
        //
    }

    heapifyUp(ind) {
        //
    }

    heapifyDown(ind) {
        //
    }
}
