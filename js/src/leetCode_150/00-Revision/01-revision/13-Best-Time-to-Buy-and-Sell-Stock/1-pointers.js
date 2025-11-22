var maxProfit = function (prices) {
    let max = 0;

    let l = 0;

    for (let r = 0; r < prices.length; r++) {
        if (prices[l] < prices[r]) {
            let a = prices[l];
            let b = prices[r];

            let profit = b - a;

            max = Math.max(max, profit);
        } else {
            l = r;
        }
    }

    return max;
};

const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result);
