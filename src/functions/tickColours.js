import randomiser from './randomiser'

function tick(el, board, nextRow, nextCol) {
  let hold = board[nextRow][nextCol]
  board[nextRow][nextCol] = el
}

function tickBoard(board) {
  console.log({board});
  // tickLoop(board)
  if (board) {
    tick(board[1][0], board, 1, 1)
    tick(board[2][0], board, 1, 0)
    tick(board[2][1], board, 2, 0)
    tick(board[2][2], board, 2, 1)
    tick(board[1][2], board, 2, 2)
    tick(board[0][2], board, 1, 2)
    tick(board[0][1], board, 0, 2)
    tick(board[0][0], board, 0, 1)
    board[0][0] = randomiser.createColour()
  }
  return board
}

function incrementRow(row, col) {
  if (col == 0 && row < 2) return row + 1
  else if (col == 2 && row > 0) return row - 1
  else return row
}

function incrementCol(row, col) {
  if (row == 2 && col > 0) return col - 1
  else if (row == 0 && col < 2) return col + 1
  return col
}

function tickLoop(board) {
  let col = 0
  for (var row = 1; row != 0; row = incrementRow(row, col)) {
    for (col = 0; col != 0 && row != 0; col = incrementCol(row, col)) {
      console.log({row, col});
    }
  }
}

module.exports = {
  tick,
  tickBoard,
  tickLoop
}
