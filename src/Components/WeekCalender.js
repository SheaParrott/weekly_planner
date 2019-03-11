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
                <Day currentDay={day} hours={this.props.hours} />
              </div>
            )
          })}
        </div>
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
  daysShown: state.daysShown,
  hours: state.hours
})

const mapActionsToProps = {
  // onUpdateStateCurrentDay: updateCurrentDay,
  // onUpdateStateFirstDayOfWeek: updateFirstDayOfWeek,
  // updateDayChosen: updateSelectedDay,
  // updateYearChosen: updateSelectedYear,
  // updateMonthChosen: updateSelectedMonth
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Week)
