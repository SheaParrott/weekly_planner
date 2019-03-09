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
    this.state = {
      months: [
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
      ],
      monthChosen: '',
      dayChosen: '',
      yearChosen: '',
      weekOrDayChosen: ''
    }
  }
  // componentDidMount = () => {
  //   this.onUpdateStateCurrentDay()
  // }
  onUpdateStateCurrentDay() {
    this.props.onUpdateStateCurrentDay(new Date())
  }
  test = () => {
    console.log(new Date(2018, 0, 1))
  }
  updateMonthChosen = event => {
    let theMonth = this.state.months.filter(
      month => month.name === event.target.value
    )
    this.setState({
      monthChosen: theMonth
    })
  }
  updateDayChosen = event => {
    this.setState({
      dayChosen: event.target.value
    })
  }
  updateYearChosen = event => {
    this.setState({
      yearChosen: event.target.value
    })
  }
  updateWeekOrDayChosen = event => {
    this.setState({
      weekOrDayChosen: event.target.value
    })
  }
  updateFullDate = () => {
    console.log(this.state.monthChosen)
    console.log(this.state.dayChosen)
    console.log(this.state.yearChosen)
    console.log(this.state.weekOrDayChosen)
    // monthChosen: '',
    // dayChosen: '',
    // yearChosen: '',
    // weekOrDayChosen: ''
  }
  render() {
    // console.log(this.props.months)
    return (
      <div className="App">
        <button onClick={this.test}>test</button>
        <div className="inputContainer">
          <input
            onChange={this.updateMonthChosen}
            placeholder="month"
            list="months"
          />
          <datalist id="months">
            {this.state.months.map((month, index) => {
              return <option key={index} value={month.name} />
            })}
          </datalist>
          <input
            onChange={this.updateDayChosen}
            list="days"
            placeholder="day"
          />
          <datalist id="days">
            {this.state.monthChosen
              ? this.state.monthChosen.map(days => {
                  let array = []
                  for (let i = 1; i <= days.days; i++) {
                    array.push(i)
                  }
                  return array.map((number, index) => {
                    return <option key={index} value={number} />
                  })
                })
              : null}
          </datalist>
          <input
            onChange={this.updateYearChosen}
            list="year"
            placeholder="year"
          />
          <datalist id="year">
            <option value="2018" />
            <option value="2019" />
            <option value="2020" />
            <option value="2021" />
          </datalist>
          <input
            onChange={this.updateWeekOrDayChosen}
            list="weekOrDay"
            placeholder="W/D"
          />
          <datalist id="weekOrDay">
            <option value="Day" />
            <option value="Week" />
          </datalist>
          <button onClick={this.updateFullDate}>Search</button>
        </div>
        <button onClick={this.onUpdateStateCurrentDay} />
        {this.props.day}
        <Day />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  day: state.day.toLocaleString()
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
