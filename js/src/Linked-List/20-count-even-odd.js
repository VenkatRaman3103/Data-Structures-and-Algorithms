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

        this.length++;
    }

    count_odd_even() {
        let n = this.head;

        let even_count = 0;
        let odd_count = 0;

        while (n != null) {
            if (n.value % 2 == 0) {
                even_count++;
            } else {
                odd_count++;
            }

            n = n.next;
        }
        console.log(even_count, odd_count);
    }

    print() {
        let arr = [];

        let current = this.head;

        while (current != null) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
    }
}

const linkedList = new LinkedList();

const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
    linkedList.append(n);
}

// linkedList.print();
linkedList.count_odd_even();
