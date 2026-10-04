class FixedCapacityQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);

        this.capacity = capacity;
        this.size = 0;

        this.front = 0;
        this.rear = 0;
    }

    enqueue(val) {
        if (this.isFull()) {
            return null;
        }

        this.queue[this.rear] = val;

        this.rear += 1;
        this.size += 1;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        let val = this.queue[this.front];

        this.front += 1;
        this.size -= 1;

        return val;
    }

    isFull() {
        return this.size == this.capacity;
    }

    isEmpty() {
        return this.size == 0;
    }

    print() {
        if (this.isEmpty()) {
            return null;
        }

        for (let i = this.front; i < this.rear; i++) {
            let key = this.queue[i];
            console.log(key);
        }
    }
}

const size = 10;
const fixedCapacityQueue = new FixedCapacityQueue(size);

for (let i = 1; i <= size; i++) {
    fixedCapacityQueue.enqueue(i);
}

fixedCapacityQueue.print();

for (let i = 1; i <= size / 2; i++) {
    const key = fixedCapacityQueue.dequeue();
}

console.log('-------------');
fixedCapacityQueue.print();
