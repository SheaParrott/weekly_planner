import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateEvent from './CreateEvent'

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateEvent: false,
      showEditOrDelete: false
    }
  }
  createEvent = () => {
    this.setState({
      showCreateEvent: !this.state.showCreateEvent
    })
  }
  showEditOrDelete = () => {
    this.setState({
      showEditOrDelete: !this.state.showEditOrDelete
    })
  }
  showEvents = () => {}
  deleteEvent = () => {}
  showEvents = () => {
    return this.props.hours.map((time, i) => {
      if (this.props.event.length === 0) {
        return (
          <div key={i} className="eventSpace">
            <span className="time">
              {time <= 12 ? `${time}am` : `${time - 12}pm`}
            </span>
          </div>
        )
      }
      return this.props.event.map(date => {
        if (date.content.date === this.state.currentDay) {
          if (
            (date.content.StartTime <= time && time < date.content.EndTime) ||
            date.content.StartTime === time
          ) {
            return (
              <div key={i} className="eventSpace">
                <span className="time">
                  {time <= 12 ? `${time}am` : `${time - 12}pm`}
                </span>
                <div className="content">
                  <span className="event" value={date.id}>
                    {date.content.body}
                  </span>
                  <span>
                    <i
                      className="fas fa-ellipsis-v"
                      onClick={this.showEditOrDelete}
                    />
                    {this.state.showEditOrDelete ? (
                      <div className="editOrDelete">
                        <div className="edit">
                          <i
                            className="fas fa-pen"
                            onClick={this.updateEvent}
                          />
                          <span>EDIT</span>
                        </div>
                        <div className="delete">
                          <i
                            className="fas fa-trash-alt"
                            onClick={this.deleteEvent}
                          />
                          <span>DELETE</span>
                        </div>
                      </div>
                    ) : null}
                  </span>
                </div>
              </div>
            )
          } else {
            return (
              <div key={i} className="eventSpace">
                <span className="time">
                  {time <= 12 ? `${time}am` : `${time - 12}pm`}
                </span>
              </div>
            )
          }
        } else {
          return (
            <div key={i} className="eventSpace">
              <span className="time">
                {time <= 12 ? `${time}am` : `${time - 12}pm`}
              </span>
            </div>
          )
        }
      })
    })
  }
  render() {
    return (
      <div className="week">
        <div className="dateAndAddEvent">
          <span className="TheDate">{`${this.props.day.getMonth() +
            1}/${this.props.day.getDate()}/${this.props.day.getFullYear()}`}</span>
          {this.state.showCreateEvent ? (
            <i className="fas fa-minus-circle" onClick={this.createEvent} />
          ) : (
            <i className="fas fa-plus-circle" onClick={this.createEvent} />
          )}

          {this.state.showCreateEvent ? (
            <CreateEvent
              currentDay={this.state.currentDay}
              createEvent={this.createEvent}
            />
          ) : null}
        </div>
        {this.showEvents()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  event: Object.values(state.byHash),
  hours: state.hours
})

export default connect(mapStateToProps)(Day)
