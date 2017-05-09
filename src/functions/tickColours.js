import randomiser from './randomiser'
import clone from 'clone'
//
// function startTicker(board, dispatch) {
//   setInterval(() => {
//     let newBoard = tickBoard(board)
//     dispatch({type: 'TICK_BOARD', payload: newBoard})
//   }, 5000)
// }

function tick(board, row, col, nextRow, nextCol, square) {
  console.log("calling tick on ", {row, col});
  board[row][col] = board[nextRow][nextCol]
}

function tickLoop(board, center) {
  console.log("tick");
  var row = center
  var col = center - 1
  let count = 0
  var square = center - 1
  let flag = true
  while (flag) {
    console.log({square});
    if (row == 0 && col == 0) flag = false
    else if (row == square && col == square) {
      console.log("new square");
      tick(board, row, col, row, col -1)
      col--
      square--
      console.log("post square change", {square, row, col});
    } else {
      let tempRow = incrementRow(row, col, square, board.length)
      let tempCol = incrementCol(row, col, square, board.length)
      tick(board, row, col, tempRow, tempCol)
      col = tempCol
      row = tempRow
      console.log("increment col/row");
    }
    count++
    // if (count > 15) break
  }
  console.log("stopped");
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
    let center = (board.length - 1) /2
    tick(board, center, center, center, center - 1)
    // board[center][center] = board[center][center - 1]
    tickLoop(board, center)
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

function incrementRow(row, col, square, length) {
  if (col == (0 + square) && row < (length - 1 - square)) return row + 1
  else if (col == (length - 1 - square) && row > (0 + square)) return row - 1
  else return row
}

function incrementCol(row, col, square, length) {
  if (row == (length - 1 - square) && col < (length - 1 - square)) return col + 1
  else if (row == (0 + square) && col > (0 + square)) return col - 1
  return col
}

module.exports = tickBoard
