var twoSum = function(nums, target) {
	var indices = new Array;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
    	if (nums[i] + nums[j] === target) {
    		indices = [i, j]
    		return indices
    	}
    }
	}
	return indices;  
};

console.log(twoSum([2, 7, 11, 15], 22))