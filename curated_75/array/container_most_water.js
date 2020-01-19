var maxWater = function(heights) {
    var left = 0;
    var right = heights.length - 1;
    var area = 0;

    while (left < right) {
      var lower = [heights[left], heights[right]].sort((a, b) => a - b);
      var tempArea = (right - left) * lower[0];
      if (tempArea > area) area = tempArea;
      if (lower[0] == heights[left]) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    
    return area;
};

var arr = [1,8,6,2,5,4,8,3,7];
console.log(maxWater(arr));

var arr2 = [1,2,4,3];
console.log(maxWater(arr2));

var arr3 = [2, 3, 4, 5, 18, 17, 6];
console.log(maxWater(arr3));