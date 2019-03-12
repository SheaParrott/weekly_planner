import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent, removeEvent, updateEvent } from '../Actions/events-actions'

class CreateEvent extends Component {
  constructor(props) {
    super(props)
    this.CreateAnEvent = this.CreateAnEvent.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
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
  editEvent = event => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    let array = [this.props.date_id]
    for (let pair of formData.entries()) {
      array.push(pair[1])
    }
    this.props.editEvent(array)
    this.props.showEditOrDelete()
  }
  deleteEvent = event => {
    this.props.deleteEvent(this.props.date_id)
    this.props.showEditOrDelete()
  }
  render() {
    return (
      <form
        onSubmit={this.props.optionsMenu ? this.editEvent : this.CreateAnEvent}
        className="CreateEvent"
      >
        {this.props.optionsMenu ? (
          <div className="editOrDelete">
            <div className="editOrDeleteTopBar">
              <i
                className="fas fa-times"
                onClick={this.props.showEditOrDelete}
              />
              <i
                className="fas fa-trash-alt delete"
                onClick={this.deleteEvent}
              />
            </div>
            <span>Edit Event</span>
          </div>
        ) : (
          <h3>
            {this.props.day.getMonth() + 1}/{this.props.day.getDate()}/
            {this.props.day.getFullYear()}
          </h3>
        )}

        <input type="hidden" name="date" value={this.props.day} />
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
  CreateAnEvent: addEvent,
  editEvent: updateEvent,
  deleteEvent: removeEvent
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateEvent)

// constructor(props) {
//   super(props)
//   this.editEvent = this.editEvent.bind(this)
//   this.deleteEvent = this.deleteEvent.bind(this)
//   this.state = {
//     showEditOrDelete: false
//   }
// }
// showEditOrDelete = () => {
//   this.setState({
//     showEditOrDelete: !this.state.showEditOrDelete
//   })
// }
