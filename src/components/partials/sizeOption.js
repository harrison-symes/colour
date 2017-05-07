import React from 'react'

module.exports = (state, dispatch) => {
  function applyOptions(maxArray) {
    return maxArray.map((el, idx) => {
      return <option value={idx + 1}>{idx + 1}</option>
    })
  }
  console.log(applyOptions([0,0,0]));
  return (
    <select onChange={(e) => dispatch({type: 'CHANGE_SIZE', payload: e.target.value})}>
      {applyOptions(Array(state.maxSize).fill(0))}
    </select>
  )
}
