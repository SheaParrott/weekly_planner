import React, { Component } from 'react'
import './App.css'
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

export default App

// tomorrows goals:
// [] set up action and reducer for when user clicks search to generate
//    new week shown.
// [] set up react router so on click the user can view independent days
// [] begin the events CRUD functionality

// to get choose date bar working
// [x] chosen month
// [x] chosen day in state
// [x] chosen year

// [] turn in assignment to jobs@trifinlabs.com
// [] email subject - Technical Interview Assignment - Shea Parrott
// [] post link to GitHub repo in email body

// [] create boxes that hold events for the days - one week worth
// [] Should only have one event running at the same time?
// [] validate all entries
// [] make all entries CRUD - create, read, update, delete
// [] going to need day objects that contain event objects.. working out the logic still
// [] event object {event: “ “, start_date: MMDDYY, end_day: MMDDYY, start_time: 0:00, end_time: 0:00, isWeekend: bool, color:  }
// [] display blocks for available events. Need to tie this to each hour from given index
// [x] make visual difference for weekend boxes

// push goals - optional
// [] toggle between week and day views
// [] theme appointments by color
// [] request confirmations before deleting event

// notes:
// no restriction on data model. Make sure to optimize complexity when accessing record entries
