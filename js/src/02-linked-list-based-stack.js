class Node {
    constructor(val) {
        this.val = val
        this.below = null
    }
}

class LinkedListStack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        newNode.below = this.top
        this.top = newNode
        this.size += 1
    }

    pop() {
        if (this.top == null) {
            return null
        }
        let val = this.top.val
        this.top = this.top.below
        this.size -= 1
        return val
    }

    peek() {
        if (this.top == null) {
            return null
        }
        return this.top.val
    }

    isEmpty() {
        return this.top == null
    }
}
