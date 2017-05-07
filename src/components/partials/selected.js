import React from 'react'

module.exports = (state, dispatch) => {
  function unselect(select) {
    dispatch({type: 'REMOVE_SELECT', payload: select})
  }
  function renderSeletedSquares() {
    return state.selectedColours.map((select) => {
      var style = {
        "background": select.colour
      };
      return <div onClick={() => unselect(select)} style={style} className="select">{select.colour}</div>
    })
  }
  return <div className="selected">
    {renderSeletedSquares()}
  </div>
}
