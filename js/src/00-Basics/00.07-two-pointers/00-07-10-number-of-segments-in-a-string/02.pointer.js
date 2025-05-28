/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let counter = 0;
    let isSegment = false;

    for (let r = 0; r < s.length; r++) {
        if (s[r] != ' ' && !isSegment) {
            isSegment = true;
            counter++;
        } else if (s[r] == ' ') {
            isSegment = false;
        }
    }
    return counter;
};

const s = 'Hello, my name is John';
const result = countSegments(s);
console.log(result);
