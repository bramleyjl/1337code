var array = [9, 3, 4, 7, 12, 12, 3, 7, 4];

var singleNumber = function(array) {
	newMap = new Map();
	for (var i = array.length - 1; i >= 0; i--) {
		if(newMap.has(array[i])) {
			newMap.set(array[i], 2);
		} else {
			newMap.set(array[i], 1);
		}
	}
	for (var [key, value] of newMap) {
		if (value === 1) return key
	}
};

console.log(singleNumber(array));