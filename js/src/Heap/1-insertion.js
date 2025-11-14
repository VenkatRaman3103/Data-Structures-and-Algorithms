const arr = [50, 30, 20, 15, 10, 8, 16];

const heap = [];

function getParentIndex(i) {
    return Math.floor(i / 2);
}

function getLeftChildIndex(i) {
    return i * 2;
}

function getRightChildIndex(i) {
    return i * 2 + 1;
}

function inseration(num) {
    arr.push(num);

    let index = arr.length - 1;

    while (index > 0) {
        let parentIndex = getParentIndex(index);

        if (arr[index] >= arr[parentIndex]) {
            [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];
        }

        index = parentIndex;
    }
}

inseration(60);
console.log(arr);
