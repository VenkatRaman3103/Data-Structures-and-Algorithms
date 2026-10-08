class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class NaiveLinkedListQueue {
    constructor() {
        this.head = null

        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)

        if (this.head == null) {
            this.head = newNode
        } else {
            let curr = this.head

            while (curr.next != null) {
                curr = curr.next
            }

            curr.next = newNode
        }

        this.size += 1
    }

    dequeue() {
        if (this.head == null) {
            return null
        }

        let val = this.head.val
        this.head = this.head.next

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

        while (curr != null) {
            console.log(curr.val)
            curr = curr.next
        }
    }
}
