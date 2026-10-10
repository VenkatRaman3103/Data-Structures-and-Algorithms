class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class CircularDoublyLinkedListQueue {
    constructor() {
        this.head = null

        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)

        if (this.head == null) {
            this.head = newNode
            newNode.next = newNode
            newNode.prev = newNode
        } else {
            let last = this.head.prev

            last.next = newNode
            newNode.prev = last
            newNode.next = this.head
            this.head.prev = newNode
        }

        this.size += 1
    }

    dequeue() {
        if (this.head == null) {
            return null
        }

        let val = this.head.val

        if (this.head == this.head.next) {
            this.head = null
        } else {
            let second = this.head.next
            let last = this.head.prev

            last.next = second
            second.prev = last
            this.head = second
        }

        this.size -= 1
        return val
    }

    peek() {
        if (this.head == null) {
            return null
        }

        return this.head.val
    }

    isEmpty() {
        return this.head == null
    }

    print() {
        if (this.head == null) {
            return null
        }

        let curr = this.head

        do {
            console.log(curr.val)
            curr = curr.next
        } while (curr != this.head)
    }

    printBackward() {
        if (this.head == null) {
            return null
        }

        let last = this.head.prev
        let curr = last

        do {
            console.log(curr.val)
            curr = curr.prev
        } while (curr != last)
    }
}
