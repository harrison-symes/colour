import React from 'react'
import options from './options'
import selected from './partials/selected'
import tickColours from '../functions/tickColours'

module.exports = ({state, dispatch}) => {
  function selectColour(colour) {
    dispatch({type: 'SELECT_COLOUR', payload: colour})
  }
  function changeSize(e) {
    if (!isNaN(parseInt(e.target.value))) dispatch({type:'CHANGE_SIZE', payload: e.target.value})
  }
  function renderSquare(colour) {
    var style = {
      "background": colour.colour
    };
    return <span><div onClick={() => selectColour(colour)} className="square" style={style}>
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
  function startTicker(interval) {
    console.log({interval});
    setInterval(() => {
      let newBoard = tickColours(state.colourArray, state.selectedColours)
      dispatch({type: 'TICK_BOARD', payload: newBoard})
    }, interval)
  }
  return (
    <div className="squares">
      {renderSquares(state.colourArray)}
      {options(state, dispatch)}
      {selected(state, dispatch)}

    </div>
  )
}
