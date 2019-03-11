import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateEvent from './CreateEvent'

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateEvent: false
    }
  }
  createEvent = () => {
    this.setState({
      showCreateEvent: !this.state.showCreateEvent
    })
  }

  showEvents = () => {
    let currentDay = `${this.props.currentDay.getMonth() +
      1}/${this.props.currentDay.getDate()}/${this.props.currentDay.getFullYear()}`

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
        if (date.content.date === currentDay) {
          if (
            (date.content.StartTime <= time && time < date.content.EndTime) ||
            date.content.StartTime == time
          ) {
            return (
              <div key={i} className="eventSpace">
                <span className="time">
                  {time <= 12 ? `${time}am` : `${time - 12}pm`}
                </span>
                <span className="event">{date.content.body}</span>
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
    let currentDay = `${this.props.currentDay.getMonth() +
      1}/${this.props.currentDay.getDate()}/${this.props.currentDay.getFullYear()}`
    return (
      <div className="week">
        <div className="dateAndAddEvent">
          <span className="TheDate">{currentDay}</span>
          <i className="fas fa-plus-circle" onClick={this.createEvent} />
          {this.state.showCreateEvent ? (
            <CreateEvent
              currentDay={currentDay}
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
  event: Object.values(state.byHash)
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
)(Day)
