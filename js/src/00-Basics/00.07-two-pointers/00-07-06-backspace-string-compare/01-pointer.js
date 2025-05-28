function backspaceCompute(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let key = s[i];

        if (key == '#') {
            stack.pop();
        } else {
            stack.push(key);
        }
    }
    return stack.join('');
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    return backspaceCompute(s) == backspaceCompute(t);
};

const s = 'a#c';
const t = 'b';
const result = backspaceCompare(s, t);
console.log(result);
