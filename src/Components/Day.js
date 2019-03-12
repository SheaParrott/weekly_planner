import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventForm from './EventForm'
import Time from './Time'

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateEvent: false,
      showEditOrDelete: false,
      hideDay: false
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
  _toggleHideDay = () => {
    this.setState({
      hideDay: !this.state.hideDay
    })
  }
  render() {
    return (
      <div className={this.state.hideDay ? 'hideDay' : 'week'}>
        {this.state.hideDay ? (
          <div>
            <i className="fas fa-chevron-right" onClick={this._toggleHideDay} />
            <h4 className="vertical">{`${this.props.day.getMonth() +
              1}/${this.props.day.getDate()}/${this.props.day.getFullYear()}`}</h4>
          </div>
        ) : (
          <div>
            <div className="dateAndAddEvent">
              <i
                className="fas fa-chevron-left"
                onClick={this._toggleHideDay}
              />
              <span className="TheDate">{`${this.props.day.getMonth() +
                1}/${this.props.day.getDate()}/${this.props.day.getFullYear()}`}</span>
              {this.state.showCreateEvent ? (
                <i className="fas fa-minus-circle" onClick={this.createEvent} />
              ) : (
                <i className="fas fa-plus-circle" onClick={this.createEvent} />
              )}

              {this.state.showCreateEvent ? (
                <EventForm
                  day={this.props.day}
                  createEvent={this.createEvent}
                />
              ) : null}
            </div>
            <div className="eventSpace " />
            {this.props.hours.map((time, i) => {
              if (time == 25) {
                return
              }
              if (this.props.event.length === 0) {
                return <Time key={i} time={time} i={i} isTrue={false} />
              } else {
                let theDaysEvents = this.props.event.filter(
                  date =>
                    (date.content.date == this.props.day &&
                      date.content.StartTime <= time &&
                      time < date.content.EndTime) ||
                    (date.content.StartTime === time &&
                      date.content.date == this.props.day)
                )
                if (theDaysEvents.length > 0) {
                  let theDate = ''
                  theDaysEvents.forEach(element => {
                    theDate = element
                  })

                  return time == theDate.content.EndTime - 1 ? (
                    <Time
                      key={i}
                      time={time}
                      date={theDate}
                      date_id={theDate.id}
                      i={i}
                      theDate={`${this.props.day.getMonth() +
                        1}/${this.props.day.getDate()}/${this.props.day.getFullYear()}`}
                      isTrue={true}
                      showEdit={true}
                    />
                  ) : (
                    <Time
                      key={i}
                      time={time}
                      date={theDate}
                      date_id={theDate.id}
                      i={i}
                      isTrue={true}
                    />
                  )
                } else {
                  return <Time key={i} time={time} i={i} isTrue={false} />
                }
              }
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  event: Object.values(state.byHash),
  hours: state.hours
})

export default connect(mapStateToProps)(Day)
