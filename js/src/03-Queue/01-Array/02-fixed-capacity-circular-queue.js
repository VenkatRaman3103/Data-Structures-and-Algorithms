class ArrayQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.size = 0;
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

    isEmpty() {
        return this.size == 0;
    }

    isFull() {
        return this.size == this.capacity;
    }
}
