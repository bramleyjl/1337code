var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
      let middle = Math.floor((start + end) / 2);
      if (nums[end] < nums[middle]) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }
    return nums[start];
};

arr = [3, 4, 5, 1, 2];
console.log(findMin(arr));