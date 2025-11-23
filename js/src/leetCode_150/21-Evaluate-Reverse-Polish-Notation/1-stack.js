var evalRPN = function (tokens) {
    let stack = [];

    for (let element of tokens) {
        if (element == '*') {
            let val = stack.pop() * stack.pop();
            stack.push(val);
        } else if (element == '+') {
            let val = stack.pop() + stack.pop();
            stack.push(val);
        } else if (element == '-') {
            let a = stack.pop();
            let b = stack.pop();
            let val = b - a;
            stack.push(val);
        } else if (element == '/') {
            let a = stack.pop();
            let b = stack.pop();
            let val = b / a;
            stack.push(parseInt(val));
        } else {
            stack.push(Number(element));
        }
    }
    return stack[0];
};

const tokens = ['2', '1', '+', '3', '*'];
const result = evalRPN(tokens);
console.log(result);
