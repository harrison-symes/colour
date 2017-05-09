import intervalButton from './partials/intervalButton'
import tickButton from './partials/tickButton'
import speedOption from './partials/speedOption'
import sizeOption from './partials/sizeOption'

import React from 'react'

module.exports = (state, dispatch) => {
  return (
    <div className="options">
      {sizeOption(state, dispatch)}
      {speedOption(state, dispatch)}
      {intervalButton(state, dispatch)}
      {tickButton(state, dispatch)}
    </div>
  )
}
