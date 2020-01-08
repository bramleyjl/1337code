var maxSubArray = function(array) {
  var count = array[0];
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    count = (count + array[i] > array[i]) ? count + array[i] : array[i];
    if (count > max) max = count;
  }
  return max;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));
