class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class CircularLinkedListQueue {
    constructor() {
        this.tail = null

        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)

        if (this.tail == null) {
            newNode.next = newNode
            this.tail = newNode
        } else {
            newNode.next = this.tail.next
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size += 1
    }

    dequeue() {
        if (this.tail == null) {
            return null
        }

        let head = this.tail.next
        let val = head.val

        if (head == this.tail) {
            this.tail = null
        } else {
            this.tail.next = head.next
        }

        this.size -= 1

        return val
    }

    peek() {
        if (this.tail == null) {
            return null
        }

        let val = this.tail.next.val

        return val
    }

    isEmpty() {
        return this.tail == null
    }

    print() {
        if (this.tail == null) {
            return null
        }

        let curr = this.tail

        do {
            curr = curr.next
            console.log(curr.val)
        } while (curr != this.tail)
    }
}
