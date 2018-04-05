var isPalindrome = function(string) {
	//regularize for lowercase and remove non-alphanumeric characters
	//then check to see if anything is left and return true if not
	string = string.toLowerCase();
	const regEx = /\w/g;
	const filteredString = string.match(regEx);
	if (filteredString === null) return true;
	
	let j = filteredString.length - 1;
	for (var i = 0; i < filteredString.length; i++) {
		if (filteredString[i] !== filteredString[j]) {
			return false;
		}
		//stops after halfway point to avoid double checking
		if (i >= j) break;
		j --;
	}
	return true;
};

const palindrome = 'A man, a plan, a canal: Panama!';
console.log(palindrome);
console.log(isPalindrome(palindrome));