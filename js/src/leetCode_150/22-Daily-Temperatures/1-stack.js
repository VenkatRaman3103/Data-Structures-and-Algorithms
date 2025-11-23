var dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0);

    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i];

        while (stack.length > 0 && stack[stack.length - 1][0] < temp) {
            const [prevTemp, prevInd] = stack.pop();

            let diff = i - prevInd;

            res[prevInd] = diff;
        }

        stack.push([temp, i]);
    }

    return res;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result);
