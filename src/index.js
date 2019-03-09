import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import currentDayReducer from './Reducers/currentWeek-reducer'
import { Provider } from 'react-redux'

import { combineReducers, createStore } from 'redux'
import currentWeek from './Reducers/currentWeek-reducer'

function getSunday(d) {
  let day = d.getDay(),
    diff = d.getDate() - day
  return new Date(d.setDate(diff))
}

const store = createStore(
  currentDayReducer,
  {
    currentDay: getSunday(new Date())
  },
  window.devToolsExtension && window.devToolsExtension()
)
console.log()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
