var rotate = function(matrix) {
	for (var i = 0; i < matrix.length; i ++) {
		let relativeEndpoint = matrix[i].length - matrix.length;
		for (var j = matrix[i].length - 1; j >= relativeEndpoint; j --) {
			let rotatedElement = matrix[i].pop();
			matrix[j - i].unshift(rotatedElement);
		}
	}
	return matrix;
};

const inputMatrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(rotate(inputMatrix))