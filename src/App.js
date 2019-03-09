import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Day from './Components/Day'
import { connect } from 'react-redux'
import { updateCurrentDay } from './Actions/updateStateCurrentDay'
import { updateFirstDayOfWeek } from './Actions/updateFirstDayOfWeek'
import {
  updateSelectedDay,
  updateSelectedMonth,
  updateSelectedYear,
  updateSelectedDaysShown
} from './Actions/updateSelectedDay'

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateStateCurrentDay = this.onUpdateStateCurrentDay.bind(this)
    this.onUpdateStateFirstDayOfWeek = this.onUpdateStateFirstDayOfWeek.bind(
      this
    )
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
  onUpdateStateCurrentDay() {
    // [x] redux
    this.props.onUpdateStateCurrentDay(this.setDateChosen())
  }
  setDateChosen = () => {
    // [x] redux
    // dates will be used like so:
    //  console.log(new Date(2018, 0, 1))
    // console.log('month Chosen: ' + this.props.monthChosen)
    // console.log('day Chosen: ' + this.props.dayChosen)
    // console.log('year Chosen: ' + this.props.yearChosen)
    return new Date(
      this.props.yearChosen,
      this.props.monthChosen,
      this.props.dayChosen
    )
  }
  onUpdateStateFirstDayOfWeek() {
    // [x] redux
    // current gets the current first day of week
    // need to pass in the value of the date chosen
    let d = this.setDateChosen()
    var day = d.getDay(),
      diff = d.getDate() - day
    this.props.onUpdateStateFirstDayOfWeek(new Date(d.setDate(diff)))
    this.onUpdateStateCurrentDay()
  }
  test = () => {
    console.log(new Date(2018, 0, 1))
  }
  updateMonthChosen = event => {
    // [] redux
    let theMonth = this.state.months.filter(
      month => month.name === event.target.value
    )
    this.setState({
      monthChosen: theMonth
    })
  }
  updateDayChosen = event => {
    // [] redux
    this.setState({
      dayChosen: event.target.value
    })
  }
  updateYearChosen = event => {
    // [] redux
    this.setState({
      yearChosen: event.target.value
    })
  }
  updateWeekOrDayChosen = event => {
    // [] redux
    this.setState({
      weekOrDayChosen: event.target.value
    })
  }
  updateFullDate = () => {
    console.log(this.state.monthChosen)
    console.log(this.state.dayChosen)
    console.log(this.state.yearChosen)
    console.log(this.state.weekOrDayChosen)
    // format like so:
    //     console.log(new Date(2018, 0, 1))

    // monthChosen: '',
    // dayChosen: '',
    // yearChosen: '',
    // weekOrDayChosen: ''
  }
  render() {
    console.log(this.props)
    let chosenMonth = this.props.months.filter(
      month => month.number === this.props.monthChosen - 1
    )
    return (
      <div className="App">
        <button onClick={this.test}>test</button>
        <div className="inputContainer">
          <select onChange={this.updateMonthChosen} name="months">
            {this.state.months.map((month, index) => {
              return (
                <option key={index} value={month.name}>
                  {month.name}
                </option>
              )
            })}
          </select>
          <select onChange={this.updateDayChosen} name="days">
            {chosenMonth.map(days => {
              let array = []
              for (let i = 1; i <= days.days; i++) {
                array.push(i)
              }
              return array.map((number, index) => {
                return (
                  <option key={index} value={number}>
                    {number}
                  </option>
                )
              })
            })}
          </select>
          <select onChange={this.updateDayChosen} name="year">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
          <select onChange={this.updateDayChosen} name="W/D">
            <option value="1">Day</option>
            <option value="7">Week</option>
          </select>
          <button onClick={this.updateFullDate}>Search</button>
        </div>
        <button onClick={this.onUpdateStateFirstDayOfWeek}>
          get current day
        </button>
        {this.props.day}
        <Day />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  day: state.day.toLocaleString(),
  firstDayOfWeek: state.firstDayOfWeek,
  months: state.months,
  monthChosen: state.monthChosen,
  dayChosen: state.dayChosen,
  yearChosen: state.yearChosen,
  NumberOfDays: state.NumberOfDays
})

const mapActionsToProps = {
  onUpdateStateCurrentDay: updateCurrentDay,
  onUpdateStateFirstDayOfWeek: updateFirstDayOfWeek
}

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
