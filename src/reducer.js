const clone = require('clone')
import randomiser from './functions/randomiser'

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    default:
      return newState
    case 'INIT':
      newState.colourArray = randomiser.populateArray(randomiser.generateArray(3))
      newState.route = '/colour'
      console.log(newState.colourArray);
      return newState
    case 'CHANGE_SIZE':
      console.log({payload});
      newState.colourArray = randomiser.populateArray(randomiser.generateArray(Number(payload)))
      return newState
    case 'TICK_BOARD':
      newState.colourArray = payload
      return newState
    case 'SELECT_COLOUR':
      newState.selectedColours.push(payload)
      return newState
  }
}
