import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

import { combineReducers, createStore } from 'redux'
import currentDayReducer from './Reducers/currentDay-reducer'

function getSunday(d) {
  var day = d.getDay(),
    diff = d.getDate() - day
  return new Date(d.setDate(diff))
}

const months = [
  { number: 0, name: 'January', days: 31 },
  { number: 1, name: 'February', days: 28 },
  { number: 2, name: 'March', days: 31 },
  { number: 3, name: 'April', days: 30 },
  { number: 4, name: 'May', days: 31 },
  { number: 5, name: 'June', days: 30 },
  { number: 6, name: 'July', days: 31 },
  { number: 7, name: 'August', days: 31 },
  { number: 8, name: 'September', days: 30 },
  { number: 9, name: 'October', days: 31 },
  { number: 10, name: 'November', days: 30 },
  { number: 11, name: 'December', days: 31 }
]
// const allReducers = combineReducers({
//   day: currentDayReducer
// })
const store = createStore(
  currentDayReducer,
  {
    day: getSunday(new Date()),
    months: months,
    time: 0
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
