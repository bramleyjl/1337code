var nums = [11, 12, 3, 5, 1, 7, 9, 10]

var containsDuplicate = function(nums) {
  var comparisonArray = [];
  for (var i = nums.length - 1; i >= 0; i--) {
  	if (comparisonArray.indexOf(nums[i]) >= 0) return true
  	comparisonArray.push(nums[i]);
  }
  return false
};

console.log(containsDuplicate(nums))