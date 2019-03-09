import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Day from './Components/Day'
import { connect } from 'react-redux'
import { updateCurrentDay } from './Actions/updateStateCurrentDay'

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateStateCurrentDay = this.onUpdateStateCurrentDay.bind(this)
  }
  // componentDidMount = () => {
  //   this.onUpdateStateCurrentDay()
  // }
  onUpdateStateCurrentDay() {
    this.props.onUpdateStateCurrentDay(new Date())
  }
  monthDays = event => {
    console.log(event.target.value)
    console.log(new Date(event.target.value))
  }
  test = () => {
    console.log(new Date(2018, 0, 1))
  }
  getDay = () => {}
  render() {
    console.log(this.props.months)
    return (
      <div className="App">
        <button onClick={this.test}>test</button>
        <div className="inputContainer">
          <input onChange={this.monthDays} placeholder="month" list="months" />
          <datalist id="months">
            {this.props.months.map((month, index) => {
              return <option key={index} value={month.name} />
            })}
          </datalist>
          <input list="days" placeholder="day" />
          <datalist id="days">
            <option value="1" />
          </datalist>
          <input list="year" placeholder="year" />
          <datalist id="year">
            <option value="2018" />
            <option value="2019" />
            <option value="2020" />
            <option value="2021" />
          </datalist>
          <input list="weekOrDay" placeholder="W/D" />
          <datalist id="weekOrDay">
            <option value="Day" />
            <option value="Week" />
          </datalist>
          <button onClick={this.getDay}>Search</button>
        </div>
        <button onClick={this.onUpdateStateCurrentDay} />
        {this.props.day}
        <Day />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  day: state.day.toLocaleString(),
  months: state.months
})

const mapActionsToProps = { onUpdateStateCurrentDay: updateCurrentDay }

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)

// to get choose date bar working
// [] chosen month
// [] chosen day in state
// [] chosen year

// [] turn in assignment to jobs@trifinlabs.com
// [] email subject - Technical Interview Assignment - Shea Parrott
// [] post link to GitHub repo in email body

// [] create boxes that hold events for the days - one week worth
// [] Should only have one event running at the same time?
// [] validate all entries
// [] make all entries CRUD - create, read, update, delete
// [] going to need day objects that contain event objects.. working out the logic still
// [] event object {event: “ “, start_date: MMDDYY, end_day: MMDDYY, start_time: 0:00, end_time: 0:00, isWeekend: bool, color:  }
// [] display blocks for available events. Will probably do this in 30 min intervals
// [] make visual difference for weekend boxes

// push goals - optional
// [] toggle between week and day views
// [] theme appointments by color
// [] request confirmations before deleting event

// notes:
// no restriction on data model. Make sure to optimize complexity when accessing record entries
