var reverse = function(x) {
	//convert to string, then array
	x = x.toString().split('');

	//remove trailing zeros
	let i = x.length -1;
	while (x[i] == 0 && i !== 0) { 
		x.pop();
		i --;
	}

	//check for negative
	let negative = '';
	if (x[0] === '-') negative = x.shift();

	//reverse and return to number
	x = x.reverse();
	x.unshift(negative);
	x = parseInt(x.join(''))

	//check for greater than 32-bit signed integer range
	if (x > ((2 ** 31) - 1) || x < -(2 ** 31)) return 0;
	
	return x;
};

const stuff = 123

console.log(stuff, reverse(stuff))