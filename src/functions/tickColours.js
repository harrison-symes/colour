import randomiser from './randomiser'
//
// function startTicker(board, dispatch) {
//   setInterval(() => {
//     let newBoard = tickBoard(board)
//     dispatch({type: 'TICK_BOARD', payload: newBoard})
//   }, 5000)
// }

function tick(board, row, col, nextRow, nextCol) {
  console.log({row, col, nextRow, nextCol});
  board[row][col] = board[nextRow][nextCol]
}

function tickLoop(board) {
  console.log("tick");
  var row = 1
  var col = 0
  let count = 0
  let flag = true
  while (row != 1 && col != 0 || flag) {
    console.log({count});
    console.log({row, col});
    let tempRow = incrementRow(row, col)
    let tempCol = incrementCol(row, col)
    console.log({tempRow, tempCol});
    tick(board, row, col, tempRow, tempCol)
    col = tempCol
    row = tempRow
    if (flag) {
      if (row == 1 && col == 0) flag = false
    }
    count++
  }
}
function tickBoard(board) {
  console.log({board});
  if (board) {
    board[1][1] = board[1][0]
    tickLoop(board)
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
  if (row == 2 && col < 2) return col + 1
  else if (row == 0 && col > 0) return col - 1
  return col
}

module.exports = tickBoard
