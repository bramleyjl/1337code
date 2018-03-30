var intersect = function(nums1, nums2) {
	function intersectCompare(firstNums, secondNums) {
		var results = []
		for (var i = firstNums.length - 1; i >= 0; i--) {
			for (var j = secondNums.length - 1; j >= 0; j--) {
				if (firstNums[i] === secondNums[j]) {
					var match = secondNums.splice(j, 1)
					results.push(match[0]);
					break;
				}
			}
		}
		return results
	}
	if (nums1.length <= nums2.length) {
		return intersectCompare(nums1, nums2);
	} else {
		return intersectCompare(nums2, nums1);
	}
}

console.log(intersect([1], [1, 1]))