let generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  let board = [];

  for (let i = 0; i < numberOfRows; i++) {
    let row = [];

    for (let j = 0; j < numberOfColumns; i++) {
      row.push(' ');
      console.log(board[i][j].join(' | '));
    };

    board.push(row);
  };
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

    let board = [];

    for (let i = 0; i < numberOfRows; i++) {
      let row = [];

      for (let j = 0; j < numberOfColumns; i++) {
        row.push(null);
        console.log(board[i][j].join(' | '));
      };

      board.push(row);
    };
    let numberOfBombsPlaced = 0

    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random()*numberOfRows);
      let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B';
    }
    return board;
  };
};

// On the next line, we'll have to increment the bomb counter. If you don't do this, then the counter will stay set to 0 and the while loop will run forever.

// Use the increment operator to increment numberOfBombsPlaced
