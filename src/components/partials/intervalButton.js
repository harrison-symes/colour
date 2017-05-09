import React from 'react'
import tickColours from '../../functions/tickColours'

module.exports = (state, dispatch) => {
  function startTicker(interval) {
    console.log({interval});
    setInterval(() => {
      let newBoard = tickColours(state.colourArray, state.selectedColours)
      dispatch({type: 'TICK_BOARD', payload: newBoard})
    }, interval)
  }
  return (
    <button onClick={() => startTicker(state.interval)}>Start</button>
  )
}
