var productExceptSelf = function(nums) {
    var rightProduct = 1;
    var leftProduct = 1;
    var outputArr = [];
    for (var i = 0; i < nums.length; i++) {
      outputArr[i] = leftProduct;
      leftProduct *= nums[i];
    }
    for (var j = nums.length -1; j >= 0; j--) {
      outputArr[j] *= rightProduct;
      rightProduct *= nums[j];
    }
    return outputArr;
};

var arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));