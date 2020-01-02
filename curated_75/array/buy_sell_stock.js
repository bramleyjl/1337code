 var maxProfit = function(prices) {
    var low = prices[0];
    var high = 0;
    var sale = 0;
    for (var i = 1; i < prices.length; i++) {
      if (prices[i] < low) {
        if (high - low > sale) {
          sale = high - low;
        }
        low = prices[i];
        high = 0;
      } else if (prices[i] > high && prices[i] > low) {
        high = prices[i];
      }
    }
    if (high - low > sale) {
      sale = high - low;
    }
    return sale;
};

var arr = [7,1,5,3,6,4];
console.log(maxProfit(arr));