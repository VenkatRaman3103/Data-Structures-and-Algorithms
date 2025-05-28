/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    if (s == '') {
        return 0;
    }
    return s.split(' ').length;
};

const s = 'Hello, my name is John';
const result = countSegments(s);
console.log(result);
