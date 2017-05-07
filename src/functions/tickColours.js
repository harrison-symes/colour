import randomiser from './randomiser'
import clone from 'clone'
//
// function startTicker(board, dispatch) {
//   setInterval(() => {
//     let newBoard = tickBoard(board)
//     dispatch({type: 'TICK_BOARD', payload: newBoard})
//   }, 5000)
// }

function tick(board, row, col, nextRow, nextCol) {
  board[row][col] = board[nextRow][nextCol]
}

function tickLoop(board) {
  console.log("tick");
  var row = 1
  var col = 0
  let count = 0
  let flag = true
  while (row != 1 && col != 0 || flag) {
    let tempRow = incrementRow(row, col)
    let tempCol = incrementCol(row, col)
    tick(board, row, col, tempRow, tempCol)
    col = tempCol
    row = tempRow
    if (flag) {
      if (row == 1 && col == 0) flag = false
    }
    count++
  }
}

// function tickAlt(board) {
//   var copy = clone(board)
//   for (var row = 0; row < board.length; row++) {
//     for (var col = 0; col < board.length; col++) {
//       console.log({row, col});
//       if (row != 0 && col != 0) {
//         let tempRow = incrementRow(row, col)
//         let tempCol = incrementCol(row, col)
//         copy[row][col] = clone(board[tempRow][tempCol])
//       }
//     }
//   }
//   return copy
// }

function tickBoard(board, selected) {
  if (board) {
    board[1][1] = board[1][0]
    tickLoop(board)
    board[0][0] = fillZeroIndex(board, selected)
  }
  return board
}

function fillZeroIndex(board, selected) {
  let answer = randomiser.createColour()
  console.log({selected});
  if (selected.length > 0) {
    selected.forEach((select) => {
      let found = null
      board.forEach((array) => {
        array.forEach((el) => {
          if (el.colour == select.colour) {
            console.log("found match", {el, select});
            found = el
          }
        })
      })
      console.log({found});
      if (found == null) answer = select
    })
  }
  console.log("randomising");
  return answer
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
