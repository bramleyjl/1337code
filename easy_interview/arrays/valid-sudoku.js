var isValidSudoku = function(board) {
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			
			var cell = board[i][j];
			if (cell === ".") continue;

			//rows validation
			for (var column = 0; column < board[i].length; column ++) {
				if (board[i][column] === cell && column !== j) { 
					return false;
				}
			}
		
			//columns valdiation
			for (var row = 0; row < board[j].length; row ++) {
				if (board[row][j] === cell && row !== i) {
					return false;
				}
			}

			//box validation
			//set box row
			if (i < 3) {
				var row = 0;
			} else if (i < 6) {
				var row = 3;
			} else {
				var row = 6;
			}

			//set box column
			if (j < 3) {
				var column = 0;
			} else if (j < 6) {
				var column = 3;
			} else {
				var column = 6;
			}

			for (var boxRow = row; boxRow < row + 3; boxRow ++) {
				for (var boxColumn = column; boxColumn < column + 3; boxColumn ++) {
					if (board[boxRow][boxColumn] === cell) {
						if (boxRow !== i || boxColumn !== j) {
							return false;
						}
					}
				}
			}

		}
	}
	return true;
};

var sudoku_data = [
[".","8","7","6","5","4","3","2","1"],
["2",".",".",".",".",".",".",".","."],
["3",".",".",".",".",".",".",".","."],
["4",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".",".","."],
["6",".",".",".",".",".",".",".","."],
["7",".",".",".",".",".",".",".","."],
["8",".",".",".",".",".",".",".","."],
["9",".",".",".",".",".",".",".","."]]

console.log(isValidSudoku(sudoku_data))