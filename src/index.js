import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import currentDayReducer from './Reducers/currentDay-reducer'
import reducer from './Reducers/currentDay-reducer'

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
const TheCurrentDay = new Date()
const firstDayOfWeek = getSunday(new Date(TheCurrentDay.toDateString()))

// get week
let daysShown = []

for (let i = 0; i < 7; i++) {
  let date = firstDayOfWeek.toISOString().split('')
  let day = date[8] + date[9]
  day = parseInt(day) + i
  let newDate = new Date(
    date.slice(0, 4).join(''),
    date.slice(5, 7).join('') - 1,
    day
  )
  daysShown.push(newDate)
}

let hours = []
for (let i = 1; i <= 24; i++) {
  if (i <= 12) {
    hours.push(`${i}am`)
  } else {
    hours.push(`${i - 12}pm`)
  }
}

const store = createStore(
  currentDayReducer,
  {
    day: TheCurrentDay,
    firstDayOfWeek: firstDayOfWeek,
    monthChosen: TheCurrentDay.getMonth(),
    dayChosen: TheCurrentDay.getDate(),
    yearChosen: TheCurrentDay.getFullYear(),
    months: months,
    daysShown: daysShown,
    hours: hours,
    byId: [],
    byHash: {}
  },
  window.devToolsExtension && window.devToolsExtension()
)

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
