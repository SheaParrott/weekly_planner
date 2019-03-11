import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../Actions/events-actions'

class CreateEvent extends Component {
  constructor(props) {
    super(props)
    this.CreateAnEvent = this.CreateAnEvent.bind(this)
  }

  CreateAnEvent = event => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    let obj = []
    for (let pair of formData.entries()) {
      obj.push(pair[1])
    }
    this.props.CreateAnEvent(obj)
    this.props.createEvent()
  }
  render() {
    return (
      <form onSubmit={this.CreateAnEvent} className="CreateEvent">
        <h3>{this.props.currentDay}</h3>
        <input type="hidden" name="date" value={this.props.currentDay} />
        <label>Start Time:</label>
        <select name="EndTime" id="StartTime" className="createEventInputs">
          {this.props.hours.map((hour, index) => {
            return (
              <option key={index} value={hour}>
                {hour <= 12 ? `${hour}am` : `${hour - 12}pm`}
              </option>
            )
          })}
        </select>
        <label>End Time:</label>
        <select name="EndTime" id="EndTime" className="createEventInputs">
          {this.props.hours.map((hour, index) => {
            return (
              <option key={index} value={hour}>
                {hour <= 12 ? `${hour}am` : `${hour - 12}pm`}
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
  hours: state.hours
})
const mapActionsToProps = {
  CreateAnEvent: addEvent
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateEvent)
