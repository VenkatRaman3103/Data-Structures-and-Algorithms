class Queue {
    constructor() {
        this.array = [];
    }

    enqueue(value) {
        this.array.push(value);

        return this.array[this.array.length - 1];
    }

    dequeue() {
        const value = this.array.shift();

        return value;
    }
}

const queue = new Queue();

queue.enqueue(12);
queue.dequeue();
console.log(queue);
