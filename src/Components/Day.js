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
  render() {
    let currentDay = `${this.props.currentDay.getMonth() +
      1}/${this.props.currentDay.getDate()}/${this.props.currentDay.getFullYear()}`
    return (
      <div className={`${this.props.onWeekPage ? 'week' : 'day'}`}>
        <div className="dateAndAddEvent">
          <span className="TheDate">{currentDay}</span>
          <i className="fas fa-plus-circle" onClick={this.createEvent} />
          {this.state.showCreateEvent ? (
            <CreateEvent currentDay={currentDay} />
          ) : null}
        </div>

        {this.props.onWeekPage
          ? this.props.hours.map((space, index) => {
              return (
                <div key={index} className="eventSpace">
                  <span className="time">{space}</span>
                </div>
              )
            })
          : null}
      </div>
    )
  }
}
export default Day
