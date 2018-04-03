var firstUniqChar = function(s) {
	let alreadyChecked = new Array;
	for (var i = 0; i < s.length; i++) {
		if (alreadyChecked.indexOf(s[i]) !== -1) continue;
		if (s.indexOf(s[i], i + 1) === -1) {
			return i;
		} else {
			alreadyChecked.push(s[i]);
		}
	}
	return -1;
};

const newString = "four score and seven years ago our fathers brought forth on this continent a new nation";

console.log(firstUniqChar(newString));