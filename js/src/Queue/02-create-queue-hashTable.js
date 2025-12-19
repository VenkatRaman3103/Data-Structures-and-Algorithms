class Queue {
    constructor() {
        this.hashTable = {};
        this.start = 0;
        this.end = 0;
    }

    enqueue(value) {
        this.hashTable[this.end] = value;
        this.end++;
    }

    dequeue() {
        let value = this.hashTable[this.start];

        delete this.hashTable[this.start];

        this.start++;

        return value;
    }
}

const queue = new Queue();

queue.enqueue(12);
console.log(queue.dequeue());

queue.enqueue(24);
queue.enqueue(27);
queue.enqueue(30);
queue.enqueue(123);
// console.log(queue.dequeue());

console.log(queue);
