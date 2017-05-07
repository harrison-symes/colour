import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Colour from './components/colour'
import tickColours from './functions/tickColours'

import Router from 'sheet-router'
import { createStore } from 'redux'

var reducer = require('./reducer')

var app = document.createElement('div')
document.querySelector('main').appendChild(app)

const initialState = {
  route: '/',
  colourArray: Array(9).fill({}),
  selectedColours: [],
  maxSize: 5,
  startSize: 3
}

var store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store


const route = Router({ default: '/404' }, [
  ['/', (params) => App],
  ['/colour', (params) => Colour]
])

subscribe(() => {
  console.log(getState().route);
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App name='COLOUR' />, app)

dispatch({type: 'INIT'})

setInterval(() => {
  let newBoard = tickColours(getState().colourArray, getState().selectedColours)
  dispatch({type: 'TICK_BOARD', payload: newBoard})
}, 5000)
