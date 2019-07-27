var reverse = function(x) {	
	x = x.toString().split('').reverse();
	while (x[0] === '0') {
		x.shift();
	}
	if (x[x.length -1] === '-') x.unshift(x.pop());
	x = x.join('');

	//check for greater than 32-bit signed integer range
	if (x > ((2 ** 31) - 1) || x < -(2 ** 31)) return 0;
	
	return x;
};

const stuff = -12300

console.log(stuff, reverse(stuff))