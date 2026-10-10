class Node {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedListQueue {
    constructor() {
        this.head = null
        this.tail = null

        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)

        if (this.head == null && this.tail == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.size += 1
    }

    dequeue() {
        if (this.head == null) {
            return null
        }

        let val = this.head.val

        if (this.head == this.tail) {
            this.tail = null
            this.head = null
        } else {
            let secondNode = this.head.next
            secondNode.prev = null
            this.head.next = null
            this.head = secondNode
        }

        this.size -= 1

        return val
    }

    peek() {
        if (this.head == null) {
            return null
        }

        let val = this.head.val

        return val
    }

    isEmpty() {
        return this.head == null
    }

    print() {
        if (this.head == null) {
            return null
        }

        let curr = this.head

        while (curr != null) {
            console.log(curr.val)
            curr = curr.next
        }
    }

    printBackward() {
        if (this.tail == null) {
            return null
        }

        let curr = this.tail

        while (curr != null) {
            console.log(curr.val)
            curr = curr.prev
        }
    }
}
