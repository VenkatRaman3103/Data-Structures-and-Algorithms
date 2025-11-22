var isValid = function (s) {
    const match = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    let stack = [];

    for (let char of s) {
        if (Object.keys(match).includes(char)) {
            stack.push(char);
        } else {
            if (stack.length == 0 || match[stack[stack.length - 1]] != char) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0;
};

const s = '(]';
const result = isValid(s);
console.log(result);
