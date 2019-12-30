var moveZeroes = function(nums) {
	for (var i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === 0) {
			var zero = nums.splice(i, 1);
			nums.push(zero[0]);
		}
	}
	return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))