class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    reverse() {
        const copy = this.clone();

        let prev = null;
        let current = copy.head;

        while (current != null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        copy.head = prev;

        return copy;
    }

    isPalindrome() {
        let reversed = this.reverse();

        let a = this.head;
        let b = reversed.head;

        while (a != null && b != null) {
            if (a.value != b.value) {
                return false;
            }

            a = a.next;
            b = b.next;
        }

        return true;
    }

    clone() {
        let copy = new LinkedList();

        let current = this.head;

        while (current != null) {
            copy.append(current.value);
            current = current.next;
        }

        return copy;
    }

    print() {
        let arr = [];

        let current = this.head;

        while (current != null) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
        return arr;
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 2, 1];

for (let n of nums) {
    linkedList.append(n);
}

console.log(linkedList.isPalindrome());
linkedList.print();
