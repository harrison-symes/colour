import React from 'react'

module.exports = (state, dispatch) => {
  function startTicker(interval) {
    setTimeout(() => {
      let newBoard = tickColours(state.colourArray, state.selectedColours)
      dispatch({type: 'TICK_BOARD', payload: newBoard})
    }, interval)
  }
  return (
    <button onClick={() => startTicker(state.interval)}>Tick</button>
  )
}
