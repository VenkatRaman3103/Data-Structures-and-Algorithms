/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let n = arr.length;

    let result = new Array(n);

    let rightMax = -1;

    for (let i = n - 1; i >= 0; i--) {
        let curr = arr[i];

        result[i] = rightMax;

        rightMax = Math.max(curr, rightMax);
    }

    return result;
};

const arr = [17, 18, 5, 4, 6, 1];

const result = replaceElements(arr);
console.log(result);
