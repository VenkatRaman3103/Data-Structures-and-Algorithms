class ArrayStack {
    constructor(capacity) {
        this.data = new Array(capacity)
        this.top = -1
        this.capacity = capacity
    }

    push(val) {
        if (this.capacity - 1 == this.top) {
            return null   // overflow
        }
        this.top += 1
        this.data[this.top] = val
        return this.data[this.top]
    }

    pop() {
        if (this.top == -1) {
            return null   // underflow
        }
        let val = this.data[this.top]
        this.data[this.top] = undefined
        this.top -= 1
        return val
    }

    peek() {
        if (this.top == -1) {
            return null
        }
        return this.data[this.top]
    }
}
