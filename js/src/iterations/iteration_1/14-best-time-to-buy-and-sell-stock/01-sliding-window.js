/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let l = 0;
    let r = 1;

    let max = 0;

    while (l < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];

            max = Math.max(profit, max);
        } else {
            l = r;
        }

        r++;
    }

    return max;
};

const prices = [7, 1, 5, 3, 6, 4];

const result = maxProfit(prices);
console.log(result);
