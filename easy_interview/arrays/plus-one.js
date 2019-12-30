var plusOne = function(digits) {
	digits[digits.length -1] += 1;
	for (var i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 10) {
			break
		} else if ( i > 0) {
			digits[i] -= 10;
			digits[i - 1] += 1;
		} else {
			digits[i] -= 10;
			digits.unshift(1);
		}
	}
	return digits
}

console.log(plusOne([0]))