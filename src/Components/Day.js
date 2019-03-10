import React, { Component } from 'react'
import { connect } from 'react-redux'

class Day extends Component {
  render() {
    return (
      <div className={`day ${this.props.NumberOfDays === 7 ? 'week' : ''}`}>
        <p>{this.props.currentDay}</p>
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
)(Day)
