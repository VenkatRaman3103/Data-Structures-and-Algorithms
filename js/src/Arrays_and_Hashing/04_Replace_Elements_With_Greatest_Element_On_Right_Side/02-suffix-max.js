/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let n = arr.length;

    for (let i = n - 1; i > 0; i--) {
        console.log(arr[i]);
    }
};

const arr = [17, 18, 5, 4, 6, 1];

const result = replaceElements(arr);
console.log(result);
