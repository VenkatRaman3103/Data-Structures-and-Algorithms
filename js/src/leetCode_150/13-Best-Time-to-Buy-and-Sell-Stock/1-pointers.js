var maxProfit = function (prices) {
    let l = 0;

    let maxProfit = 0;

    for (let r = 0; r < prices.length; r++) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];

            maxProfit = Math.max(profit, maxProfit);
        } else {
            l = r;
        }
    }

    return maxProfit;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];
const result = maxProfit(prices);
console.log(result);
