import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../Actions/events-actions'

class CreateEvent extends Component {
  constructor(props) {
    super(props)
    this.CreateAnEvent = this.CreateAnEvent.bind(this)
  }

  CreateAnEvent = event => {
    console.log()
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    let obj = []
    for (let pair of formData.entries()) {
      obj.push(pair[1])
    }
    this.props.CreateAnEvent(obj)
  }
  render() {
    return (
      <form onSubmit={this.CreateAnEvent} className="CreateEvent">
        <h3>{this.props.currentDay}</h3>
        <input type="hidden" name="date" value={this.props.currentDay} />
        <label for="StartTime">End Time:</label>
        <select name="EndTime" id="StartTime">
          {this.props.hours.map((hour, index) => {
            return (
              <option key={index} value={hour}>
                {hour}
              </option>
            )
          })}
        </select>
        <label for="EndTime">Start Time:</label>
        <select name="EndTime" id="EndTime">
          {this.props.hours.map((hour, index) => {
            return (
              <option key={index} value={hour}>
                {hour}
              </option>
            )
          })}
        </select>
        <textarea name="body" required rows="3" />
        <button type="submit">SUBMIT</button>
      </form>
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
  CreateAnEvent: addEvent
  // onUpdateStateCurrentDay: updateCurrentDay,
  // onUpdateStateFirstDayOfWeek: updateFirstDayOfWeek,
  // updateDayChosen: updateSelectedDay,
  // updateYearChosen: updateSelectedYear,
  // updateMonthChosen: updateSelectedMonth
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateEvent)

// assuming Redux passes in the state object as this.props.data
// {this.props.data.byId.map((item, index) => (
//   <div key={index}>
//     {this.props.data.byHash[item].content.title}
//   </div>
// )}
