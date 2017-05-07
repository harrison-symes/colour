import React from 'react'
import sizeOption from './partials/sizeOption'

module.exports = ({state, dispatch}) => {
  function changeSize(e) {
    if (!isNaN(parseInt(e.target.value))) dispatch({type:'CHANGE_SIZE', payload: e.target.value})
  }
  function renderSquare(colour) {
    var style = {
      "background": colour.colour
    };
    return <span><div className="square" style={style}>
    </div></span>
  }
  function renderRow(row) {
    return <div className="row">
      {row.map((square) => renderSquare(square))}
    </div>
  }
  function renderSquares(array) {
    return array.map(function (row) {
      return renderRow(row)
    })
  }
  return (
    <div className="squares">
      {renderSquares(state.colourArray)}
      {sizeOption(state, dispatch)}
    </div>
  )
  console.log(state.colourArray);
  return <div>Hello</div>
}
