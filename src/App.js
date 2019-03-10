import React, { Component } from 'react'
import './App.css'
import Day from './Components/Day'
import DaySelectorBar from './Components/DaySelectorBar'
import { connect } from 'react-redux'
import Header from './Components/Header'
import Footer from './Components/Footer'
import WeekCalender from './Components/WeekCalender'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeekCalender />
        <Footer />
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
  NumberOfDays: state.NumberOfDays,
  daysShown: state.daysShown
})

const mapActionsToProps = {
  // onUpdateStateCurrentDay: updateCurrentDay,
  // onUpdateStateFirstDayOfWeek: updateFirstDayOfWeek,
  // updateDayChosen: updateSelectedDay,
  // updateYearChosen: updateSelectedYear,
  // updateMonthChosen: updateSelectedMonth,
  // updateWeekOrDayChosen: updateSelectedDaysShown
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
