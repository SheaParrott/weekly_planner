import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Day from './Components/Day'
import { connect } from 'react-redux'
import { updateCurrentDay } from './Actions/updateStateCurrentDay'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // this.onUpdateStateCurrentDay = this.onUpdateStateCurrentDay.bind(this)
  // }
  // componentDidMount = () => {
  //   this.onUpdateStateCurrentDay()
  // }
  // onUpdateStateCurrentDay() {
  //   this.props.updateCurrentDay(new Date())
  // }
  render() {
    console.log(this.props.currentDay)
    return (
      <div className="App">
        <Day />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentDay: state
})
const mapActionsToProps = { onUpdateStateCurrentDay: updateCurrentDay }

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)

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
