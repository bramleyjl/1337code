var maxProfit = function(prices) {
    let totalProfit = 0;
    let buyPrice = prices[0];

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > buyPrice && (prices[i] > prices[i + 1] || (i === prices.length -1))){
            totalProfit += prices[i] - buyPrice;
            buyPrice = prices[i + 1];
        } else if (prices[i] < buyPrice) {
            buyPrice = prices[i];
        }
    }
    return totalProfit;
};

console.log(maxProfit([1,2,3,4,5]));
