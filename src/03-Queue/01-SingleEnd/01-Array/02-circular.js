class CircularCapacityQueue {
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

        this.rear = (this.rear + 1) % this.capacity;
        this.size += 1;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        let val = this.queue[this.front];

        this.front = (this.front + 1) % this.capacity;
        this.size -= 1;

        return val;
    }

    print() {
        if (this.isEmpty()) {
            return null;
        }

        let count = 0;
        let idx = this.front;

        while (count < this.size) {
            let key = this.queue[idx];
            console.log(key);

            idx = (idx + 1) % this.capacity;
            count += 1;
        }
    }

    isFull() {
        return this.size == this.capacity;
    }

    isEmpty() {
        return this.size == 0;
    }
}

const size = 10;
const circularCapacityQueue = new CircularCapacityQueue(size);

for (let i = 1; i <= size; i++) {
    circularCapacityQueue.enqueue(i);
}

circularCapacityQueue.print();

for (let i = 1; i <= size / 2; i++) {
    circularCapacityQueue.dequeue();
}

console.log('--------------------');
circularCapacityQueue.print();
