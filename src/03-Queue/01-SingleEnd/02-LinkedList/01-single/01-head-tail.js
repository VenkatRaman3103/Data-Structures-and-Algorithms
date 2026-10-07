class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedListQueue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(val){
        const node = new Node(val)

        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }

        this.size += 1
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("queue is empty")
        }

        const val = this.head.val
        this.head = this.head.next

        if(this.head === null){
            this.tail = null
        }

        this.size -= 1
        return val
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.head.val
    }
}