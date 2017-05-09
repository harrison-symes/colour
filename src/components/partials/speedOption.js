import React from 'react'

module.exports = (state, dispatch) => {
  function renderOptions() {
    let arr = []
    for (var i = 5000; i >= 200; i = i - 200) {
      arr.push(<option value={i}>{i}</option>)
    }
    return arr
  }
  return (
    <select onChange={(e) => dispatch({type: 'CHANGE_SPEED', payload: e.target.value})}>
      {renderOptions()}
    </select>
  )
}
