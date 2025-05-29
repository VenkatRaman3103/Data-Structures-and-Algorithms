/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let counter = 0;
    let isSegment = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ' && !isSegment) {
            isSegment = true;
            counter += 1;
        } else if (s[i] == ' ') {
            isSegment = false;
        }
    }
    return counter;
};

const s = 'Hello, my name is John';
const result = countSegments(s);
console.log(result);
