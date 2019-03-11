import React, { Component } from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import DaySelectorBar from './DaySelectorBar'

class Week extends Component {
  render() {
    return (
      <div className="Calender">
        <DaySelectorBar />
        <div className="eventsContainer">
          {this.props.daysShown.map((day, index) => {
            return (
              <div key={index} className="displayedDays">
                <Day currentDay={day} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  daysShown: state.daysShown,
  hours: state.hours
})

export default connect(mapStateToProps)(Week)
