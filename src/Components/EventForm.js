import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent, removeEvent, updateEvent } from '../Actions/events-actions'

class CreateEvent extends Component {
  constructor(props) {
    super(props)
    this.CreateAnEvent = this.CreateAnEvent.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)

    if (this.props.optionsMenu) {
      let eventBody = Object.entries(this.props.content).find(body => {
        return body[0] == 'body'
      })
      this.state = {
        endTime: this.props.hours,
        editEventBody: eventBody[1],
        _showDelete: false
      }
    } else {
      this.state = {
        endTime: this.props.hours,
        toggleDelete: false
      }
    }
  }

  updateEndTime = event => {
    this.setState({
      endTime: this.props.hours.slice(
        event.target.value,
        this.props.hours.length
      )
    })
  }
  _editEventBody = event => {
    this.setState({
      editEventBody: event.target.value
    })
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
  _toggleDelete = () => {
    this.setState({
      toggleDelete: !this.state.toggleDelete
    })
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
                onClick={this._toggleDelete}
              />
              {this.state.toggleDelete ? (
                <div className="toggleDeleteBar">
                  <div className="close">
                    <i className="fas fa-times" onClick={this._toggleDelete} />
                  </div>

                  <h3>Delete this event?</h3>

                  <button className="deleteOption" onClick={this.deleteEvent}>
                    Yes
                  </button>
                </div>
              ) : null}
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
        <select
          name="EndTime"
          id="StartTime"
          className="createEventInputs"
          onChange={this.updateEndTime}
        >
          {this.props.hours.map((hour, index) => {
            if (this.props.optionsMenu) {
              let daysEventsMinusCurrentEditEvent = this.props.event.filter(
                date => date.id !== this.props.date_id
              )
              let theDaysEvents = daysEventsMinusCurrentEditEvent.filter(
                date =>
                  (date.content.date == this.props.day &&
                    date.content.StartTime <= hour &&
                    hour < date.content.EndTime) ||
                  (date.content.StartTime === hour &&
                    date.content.date == this.props.day)
              )
              if (theDaysEvents.length > 0) {
                return
              }
            } else {
              let theDaysEvents = this.props.event.filter(
                date =>
                  (date.content.date == this.props.day &&
                    date.content.StartTime <= hour &&
                    hour < date.content.EndTime) ||
                  (date.content.StartTime === hour &&
                    date.content.date == this.props.day)
              )
              if (theDaysEvents.length > 0) {
                return
              }
            }

            if (hour == 25) {
              return
            }
            return (
              <option key={index} value={hour}>
                {hour <= 12 ? `${hour}am` : `${hour - 12}pm`}
              </option>
            )
          })}
        </select>
        <label>End Time:</label>
        <select name="EndTime" id="EndTime" className="createEventInputs">
          {this.state.endTime.map((hour, index) => {
            if (this.props.optionsMenu) {
              let daysEventsMinusCurrentEditEvent = this.props.event.filter(
                date => date.id !== this.props.date_id
              )
              let theDaysEvents = daysEventsMinusCurrentEditEvent.filter(
                date =>
                  (date.content.date == this.props.day &&
                    date.content.StartTime <= hour &&
                    hour < date.content.EndTime) ||
                  (date.content.StartTime === hour &&
                    date.content.date == this.props.day)
              )
              if (theDaysEvents.length > 0) {
                return
              }
            } else {
              let theDaysEvents = this.props.event.filter(
                date =>
                  (date.content.date == this.props.day &&
                    date.content.StartTime <= hour &&
                    hour < date.content.EndTime) ||
                  (date.content.StartTime === hour &&
                    date.content.date == this.props.day)
              )
              if (theDaysEvents.length > 0) {
                return
              }
            }

            if (hour == 1) {
              return
            } else if (hour == 25) {
              return (
                <option key={index} value={hour}>
                  1am
                </option>
              )
            }
            return (
              <option key={index} value={hour}>
                {hour <= 12 ? `${hour}am` : `${hour - 12}pm`}
              </option>
            )
          })}
        </select>
        <label>Category</label>
        <select name="body" className="createEventInputs">
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
        </select>
        {this.props.optionsMenu ? (
          <textarea
            className="createEventInputs"
            name="body"
            required
            rows="3"
            value={this.state.editEventBody}
            onChange={this._editEventBody}
          />
        ) : (
          <textarea
            name="body"
            className="createEventInputs"
            required
            rows="3"
          />
        )}

        <button className="eventForm" type="submit">
          SUBMIT
        </button>
      </form>
    )
  }
}
const mapStateToProps = state => ({
  hours: state.hours,
  event: Object.values(state.byHash)
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
