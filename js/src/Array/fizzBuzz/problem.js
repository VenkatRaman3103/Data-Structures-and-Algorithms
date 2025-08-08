export const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i < n + 1; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push('FizzBuzz');
        } else if (i % 3 == 0) {
            result.push('Fizz');
        } else if (i % 5 == 0) {
            result.push('Buzz');
        } else {
            result.push(String(i));
        }
    }

    return result;
};

const n = 15;
const result = fizzBuzz(n);
// console.log(result);
