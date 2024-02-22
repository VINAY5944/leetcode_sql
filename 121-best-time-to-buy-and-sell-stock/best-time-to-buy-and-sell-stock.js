/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
 if (prices.length <= 1) {
        return 0; // If there are less than 2 days, no transaction is possible
    }

    let minPrice = prices[0]; // Initialize the minimum price to the price on the first day
    let maxProfit = 0; // Initialize the maximum profit to 0

    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price if a lower price is found
        minPrice = Math.min(minPrice, prices[i]);

        // Update the maximum profit if a higher selling price is found
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};