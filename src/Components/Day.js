import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateEvent from './CreateEvent'
import Time from './Time'

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
            <CreateEvent day={this.props.day} createEvent={this.createEvent} />
          ) : null}
        </div>
        <div className="eventSpace " />
        {this.props.hours.map((time, i) => {
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
    )
  }
}

const mapStateToProps = state => ({
  event: Object.values(state.byHash),
  hours: state.hours
})

export default connect(mapStateToProps)(Day)
