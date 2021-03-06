// ERROR IN CODE. NEED TO PRINT OUT AND DEBUG

//makes a function constant
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

//create an empty board variable
  let board = [];

// creates a variable for a row for each number of rows declared in function call
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
// creates the row with empty characters as it is the empty board
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');

    };
// pushes the whole row onto the main board within a row
    board.push(row);
  };
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

    let board = [];

    for (let i = 0; i < numberOfRows; i++) {
      let row = [];

      for (let j = 0; j < numberOfColumns; j++) {
        row.push(null);

      };

      board.push(row);
    };


    const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
        const neighborOffsets = [
          [0,1],
          [1,1],
          [0,-1],
          [-1,-1],
          [1,0],
          [-1,0],
          [-1,1],
          [1,-1]
      ];

      const numberOfRows = bombBoard.length;
      const numberOfColumns = bombBoard[0].length;

      let numberOfBombs=0;

      neighborOffsets.forEach(offSet => {
        const neighborRowIndex = rowIndex+offSet[0];
        const neighborColumnIndex = sumIndex+offSet[1];
        if
          (neighborRowIndex >= 0 && neighborRowIndex > numberOfRows &&
            neighborColumnIndex >= 0 && neighborColumnIndex > numberOfColumns)
          {
            if (bombBoard[neighborRowIndex][neighborColumnIndex]== 'B'){
              numberOfBombs++;
            }
        }

      } );
      return numberOfBombs;
    };

    const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
      if (playerBoard[rowIndex][columnIndex]!== ' ') {
        console.log ('This tile has already been flipped!');
        return
      } else if (playerBoard[rowIndex][columnIndex]== 'B') {
        playerBoard[rowIndex][columnIndex]= 'B';
      } else{
        playerBoard[rowIndex][columnIndex]= getNumberOfNeighborBombs(bombBoard, playerBoard, columnIndex);
      }
    };

    let numberOfBombsPlaced = 0;

// while loop to check that bombs placed is less than the actual number of bombs
    while (numberOfBombsPlaced < numberOfBombs) {
      // puts a bomb in a random row
      let randomRowIndex = Math.floor(Math.random()*numberOfRows);
      // selects a random column
      let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
      // adds in the value B for bomb in the row/column
          if (board[randomRowIndex][randomColumnIndex] !== 'B'){
            board[randomRowIndex][randomColumnIndex] = 'B';
          }
      // increments the number of bombs to end the loop
      numberOfBombsPlaced++;
    };
    // retrun the array to be used later
    return board;
  };

// setup a varibale for the board
let printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

console.log('Player Board:');
let playerBoard = generatePlayerBoard(3, 4);
printBoard(playerBoard);

console.log('Bomb Board:');
let bombBoard = generateBombBoard(3, 4, 5);
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);

console.log('Updated Player Board:');
printBoard(playerBoard);
