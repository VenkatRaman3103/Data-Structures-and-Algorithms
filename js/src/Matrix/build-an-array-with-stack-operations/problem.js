export const buildArray = (target, n) => {
    const operations = [];

    let index = 0;
    let current = 1;

    while (index < target.length) {
        const num = target[index];

        if (current == num) {
            operations.push('Push');
            index++;
            current++;
        } else {
            operations.push('Push');
            operations.push('Pop');
            current++;
        }
    }

    return operations;
};

const target = [1, 3];
const n = 3;

const result = buildArray(target, n);
console.log(result);
