// Next, call the .join() method on the first row element within your console.log(). Join using ' | ' as the separator (a pipe character with a single space on each side of it). All of this should happen on a single line of code.
//
// If you are unfamiliar with the .join() method, use this documentation for help.
//
// On the next couple of lines, do the same logging for the second and third elements of board.

const printBoard = (a) => {
  console.log('Current Board:');
  for (i = 0; i < board.length; i++) {
    console.log(board[i].join(' | '));
  };
};

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);

board[0][1] = '1';
board[1][2] = 'B';
board[2][0] = 'x';
printBoard(board);
