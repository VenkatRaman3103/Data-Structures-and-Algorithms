class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SentinelLinkedListQueue {
    constructor() {
        this.dummyNode = new Node(undefined)
        this.tail = this.dummyNode

        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    enqueue(val) {
        let newNode = new Node(val)

        this.tail.next = newNode
        this.tail = newNode

        this.size += 1
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        let first = this.dummyNode.next
        let val = first.val

        this.dummyNode.next = first.next

        if (first == this.tail) {
            this.tail = this.dummyNode
        }

        this.size -= 1

        return val
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }

        let val = this.dummyNode.next.val

        return val
    }

    print() {
        if (this.isEmpty()) {
            return null
        }

        let curr = this.dummyNode.next

        while (curr != null) {
            console.log(curr.val)
            curr = curr.next
        }
    }
}
