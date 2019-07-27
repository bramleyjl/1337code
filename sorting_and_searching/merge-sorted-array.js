var merge = function(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
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