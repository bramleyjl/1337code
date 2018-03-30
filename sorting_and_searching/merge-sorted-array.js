var merge = function(nums1, m, nums2, n) {

	var j = nums1.length -1;
	while (nums1.length > (m)) {
		if (nums1[j] === 0) nums1.splice(j, 1)
		j --;
	}

	var k = nums2.length -1;
	while (nums2.length > (n)) {
		if (nums2[k] === 0) nums2.splice(k, 1)
		k --;
	}

	var startIndex = nums1.length - 1;
	for (var i = nums2.length -1; i >= 0; i--) {
		while (nums2[i] < nums1[startIndex]) {
			startIndex -= 1;
		}
		nums1.splice(startIndex + 1, 0, nums2[i]);
	}
	return nums1  
};

console.log(merge([1, 0], 1, [2], 1))