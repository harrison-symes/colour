import React from 'react'

module.exports = (state, dispatch) => {
  function applyOptions(maxArray) {
    let arr = []
    for (var i = 1; i < state.maxSize; i = i + 2) {
      arr.push(<option value={i}>{i}</option>)
    }
    return arr
  }
  return (
    <select onChange={(e) => dispatch({type: 'CHANGE_SIZE', payload: e.target.value})}>
      {applyOptions()}
    </select>
  )
}
