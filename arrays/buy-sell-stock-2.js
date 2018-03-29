var prices = [1, 4, 5, 2, 10, 13, 2, 5, 4, 10]

var maxProfit = function(prices) {
    var max = 0;
    for(var i = prices.length -1; i > 0; i--){
        var temp = prices[i]-prices[i-1];
        if(temp > 0){
            max += temp; 
        }
    }
    return max;
};

console.log(maxProfit(prices))