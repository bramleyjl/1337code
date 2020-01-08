var maxProduct = function(nums) {
  var output = nums[0];
  var max = nums[0];
  var min = nums[0];
  for (var i = 1; i < nums.length; i++) {
    tempMax = Math.max(max * nums[i], min * nums[i], nums[i]);
    tempMin = Math.min(max * nums[i], min * nums[i], nums[i]);
    max = tempMax;
    min = tempMin;
    output = Math.max(output, max);
  }
  return output;
}

let arr = [2, 3, -2, 4];
console.log(maxProduct(arr));

let arr2 = [-2, 0, -1];
console.log(maxProduct(arr2));

let arr3 = [-4, -3, -2];
console.log(maxProduct(arr3));
