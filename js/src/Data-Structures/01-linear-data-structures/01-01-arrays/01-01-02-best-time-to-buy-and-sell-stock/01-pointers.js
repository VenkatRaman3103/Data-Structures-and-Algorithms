/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const hashTable = {};

    let a = 0;
    let b = 1;

    while (b < prices.length) {
        const calc = prices[b] - prices[a];

        hashTable[prices[b]] = calc;

        a++;
        b++;
    }

    let max = 0;
    let result = 0;

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] > max) {
            max = hashTable[key];
            result = key;
        }
    }
    return Number(result);
};

const prices = [1, 2];
const result = maxProfit(prices);
console.log(result);
