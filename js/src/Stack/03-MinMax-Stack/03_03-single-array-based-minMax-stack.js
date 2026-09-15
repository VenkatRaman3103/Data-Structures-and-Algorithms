class MinMaxStack {
    constructor() {
        this.stack = []
        this.curr_min = null
        this.curr_max = null
        this.size = 0
    }

    push(val) {
        if (this.size == 0) {
            this.stack.push(val)
            this.curr_max = val
            this.curr_min = val
        } else if (val < this.curr_min) {
            let encoded = 2 * val - this.curr_min
            this.stack.push(encoded)
            this.curr_min = val
        } else if (val > this.curr_max) {
            this.stack.push(2 * val - this.curr_max)
            this.curr_max = val
        } else {
            this.stack.push(val)
        }
        this.size += 1
    }

    pop() {
        if (this.size == 0) {
            return null
        }

        let top = this.stack[this.stack.length - 1]
        let val = null

        if (top < this.curr_min) {
            val = this.curr_min
            this.curr_min = 2 * val - top
        } else if (top > this.curr_max) {
            val = this.curr_max
            this.curr_max = 2 * val - top
        } else {
            val = top
        }

        this.stack.pop()
        this.size -= 1
        return val
    }

    isEmpty() {
        return this.size == 0
    }

    peek() {
        if (this.size == 0) {
            return null
        }
        let top = this.stack[this.stack.length - 1]
        if (top < this.curr_min) {
            return this.curr_min
        } else if (top > this.curr_max) {
            return this.curr_max
        } else {
            return top
        }
    }

    getMax() {
        return this.curr_max
    }

    getMin() {
        return this.curr_min
    }
}
