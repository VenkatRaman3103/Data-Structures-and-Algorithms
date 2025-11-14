class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);

        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
            }

            index = parentIndex;
        }
    }

    delete() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let index = 0;

        while (true) {
            let left = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);

            let largest = index;

            if (this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest == index) {
                break;
            }

            this.swap(index, largest);
            index = largest;
        }
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }
}

const temp = [30, 50, 15, 20, 8, 10, 16, 60];

const maxHeap = new MaxHeap();

for (let num of temp) {
    maxHeap.insert(num);
}

console.log(maxHeap.heap);

maxHeap.delete();
console.log(maxHeap.heap);
maxHeap.delete();
console.log(maxHeap.heap);
maxHeap.delete();
console.log(maxHeap.heap);
maxHeap.delete();
console.log(maxHeap.heap);
