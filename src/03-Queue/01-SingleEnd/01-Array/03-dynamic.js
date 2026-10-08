class DynamicCapacityQueue {
    constructor(initialCapacity) {
        if (!Number.isInteger(initialCapacity)) {
            throw new Error(`Expected an integer capacity, got ${initialCapacity}`)
        }

        initialCapacity = Math.max(1, initialCapacity)

        this.queue = new Array(initialCapacity)

        this.capacity = initialCapacity
        this.size = 0

        this.front = 0
        this.rear = 0
    }

    enqueue(val) {
        if (this.isFull()) {
            this._resize(this.capacity * 2)
        }

        this.queue[this.rear] = val

        this.rear = (this.rear + 1) % this.capacity
        this.size += 1
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        let val = this.queue[this.front]
        this.queue[this.front] = undefined

        this.front = (this.front + 1) % this.capacity
        this.size -= 1

        return val
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }

        return this.queue[this.front]
    }

    print() {
        if (this.isEmpty()) {
            return null
        }

        let count = 0
        let idx = this.front

        while (count < this.size) {
            console.log(this.queue[idx])

            idx = (idx + 1) % this.capacity
            count += 1
        }
    }

    isFull() {
        return this.size == this.capacity
    }

    isEmpty() {
        return this.size == 0
    }

    _resize(newCapacity) {
        let newQueue = new Array(newCapacity)

        for (let i = 0; i < this.size; i++) {
            newQueue[i] = this.queue[(this.front + i) % this.capacity]
        }

        this.queue = newQueue

        this.capacity = newCapacity
        this.front = 0
        this.rear = this.size
    }
}
