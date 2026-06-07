/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let result = Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let max = -1;

        for (let j = i + 1; j < arr.length; j++) {
            let curr = arr[j];

            max = Math.max(curr, max);

            console.log(arr[i], max);
        }

        result[i] = max;
    }

    return result;
};

const arr = [17, 18, 5, 4, 6, 1];

const result = replaceElements(arr);
console.log(result);
